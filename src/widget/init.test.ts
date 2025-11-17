import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { init } from './init';

vi.mock('preact', () => ({
  render: vi.fn(),
}));

vi.mock('../features/stocks/components/card/card.module.css?raw', () => ({
  default: 'width: 350px;',
}));

vi.mock('../features/stocks/components/cards-list/cards-list.module.css?raw', () => ({
  default: 'display: grid;',
}));

vi.mock('../components/page-title/page-title.module.css?raw', () => ({
  default: 'font-size: 32px;',
}));

vi.mock('../routes/app/dashboard.module.css?raw', () => ({
default: 'display: flex;',
}));

vi.mock('../features/stocks/components/chart/chart.module.css?raw', () => ({
  default: 'width: 100%;',
}));

describe('init', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'test-widget';
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  });

  it('should initialize widget successfully', async () => {
    const options = {
      containerId: 'test-widget',
      symbol: 'IBM',
      apikey: 'demo',
      theme: 'dark' as const,
      refreshInterval: 60000,
    };

    await expect(init(options)).resolves.toBeUndefined();
  });

  it('should create shadow DOM', async () => {
    const options = {
      containerId: 'test-widget',
    };

    await init(options);

    expect(container.shadowRoot).toBeTruthy();
  });

});

