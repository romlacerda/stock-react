export interface AlphaVantageResponse {
    "Meta Data": {
      "2. Symbol": string;
    };
    "Time Series (5min)": Record<string, StockData>;
  } 

export interface StockData {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  }