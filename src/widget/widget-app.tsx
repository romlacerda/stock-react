import { Dashboard } from "../routes/app/dashboard";

type WidgetAppProps = {
  symbol?: string;
  apikey?: string;
  refreshInterval: number;
};

export const WidgetApp = ({
  symbol,
  apikey,
  refreshInterval,
}: WidgetAppProps) => {
  return (
    <Dashboard
      symbol={symbol}
      apikey={apikey}
      refreshInterval={refreshInterval}
    />
  );
};
