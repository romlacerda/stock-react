import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getStocks } from '../get-stocks';
import type { AlphaVantageResponse } from '../../types/api';

const mockGet = vi.fn();

vi.mock('../../../../lib/api', () => ({
  api: {
    get: (...args: unknown[]) => mockGet(...args),
  },
}));

describe('getStocks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch stocks data successfully', async () => {
    const mockResponse: AlphaVantageResponse = {
      'Meta Data': {
        '2. Symbol': 'IBM',
      },
      'Time Series (5min)': {
        '2024-01-01 10:00:00': {
          '1. open': '150.00',
          '2. high': '151.00',
          '3. low': '149.00',
          '4. close': '150.50',
          '5. volume': '1000',
        },
      },
    };

    mockGet.mockResolvedValue({
      data: mockResponse,
    });

    const result = await getStocks({ symbol: 'IBM', apikey: 'test-key' });

    expect(mockGet).toHaveBeenCalledWith('/query', {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'IBM',
        interval: '5min',
        apikey: 'test-key',
      },
    });

    expect(result).toEqual(mockResponse);
  });

  it('should call API with correct parameters', async () => {
    mockGet.mockResolvedValue({
      data: {
        'Meta Data': { '2. Symbol': 'AAPL' },
        'Time Series (5min)': {},
      },
    });

    await getStocks({ symbol: 'AAPL', apikey: 'demo-key' });

    expect(mockGet).toHaveBeenCalledWith('/query', {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'AAPL',
        interval: '5min',
        apikey: 'demo-key',
      },
    });
  });

  it('should handle API errors', async () => {
    const error = new Error('API Error');
    mockGet.mockRejectedValue(error);

    await expect(getStocks({ symbol: 'IBM', apikey: 'test-key' })).rejects.toThrow('API Error');
  });
});

