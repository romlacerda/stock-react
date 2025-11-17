import type { AlphaVantageResponse, StockData } from "../types/api";

import { DEFAULT_POLLING_INTERVAL, DEFAULT_SYMBOL } from "../utils/constants";
import { api } from "../../../lib/api";

import { useEffect, useState } from "preact/hooks";

type StockSnapshot = {
  open: number;
  close: number;
  high: number;
  low: number;  
  volume: number;
};

type UseStocksOptions = {
  symbol?: string;
  pollingInterval?: number;
  apikey?: string;
};

const parseNumber = (value: string) => Number.parseFloat(value);

export const getStocks = async ({ symbol, apikey}: UseStocksOptions) => {
  if (!symbol || !apikey) {
    throw new Error("Symbol and API key are required");
  }

  const response = await api.get("/query", {
    params: {
      function: "TIME_SERIES_INTRADAY",
      symbol,
      interval: "5min",
      apikey: apikey,
    },
  });

  return response.data as AlphaVantageResponse;
};

export const useStocks = ({
  symbol = DEFAULT_SYMBOL,
  pollingInterval = DEFAULT_POLLING_INTERVAL,
  apikey,
}: UseStocksOptions) => {
    const [isLoading, setIsLoading] = useState(false);
  const [stocks, setStocks] = useState<Map<string, StockSnapshot>>(new Map());

  useEffect(() => {
    let isMounted = true;

    const fetchStocks = async () => {
      try {
        setIsLoading(true);
        const data = await getStocks({ symbol, apikey });
        if (!isMounted) return;

        const timeSeries = data["Time Series (5min)"];
        const entries = Object.values(timeSeries);
        
        if (!entries.length) return;

        const lastStock = entries[entries.length - 1] as StockData;
        const currentSymbol = data["Meta Data"]["2. Symbol"] ?? symbol;

        setStocks(
          new Map().set(currentSymbol, {
            open: parseNumber(lastStock["1. open"]),
            close: parseNumber(lastStock["4. close"]),
            high: parseNumber(lastStock["2. high"]),
            low: parseNumber(lastStock["3. low"]),
            volume: parseNumber(lastStock["5. volume"]),
          })
        );

      } catch (error) {
        console.error("Failed to fetch stocks", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStocks();
    const timerId = window.setInterval(fetchStocks, pollingInterval);

    return () => {
      isMounted = false;
      window.clearInterval(timerId);
    };
  }, [symbol, pollingInterval, apikey]);

  return { stocks, isLoading };
};