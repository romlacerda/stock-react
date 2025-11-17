import { CardsList } from "../../features/stocks/components/cards-list";
import styles from "./dashboard.module.css";
import { PageTitle } from "../../components/page-title";

type DashboardProps = {
  symbol?: string;
  apikey?: string;
  refreshInterval?: number;
};

export const Dashboard = ({
  symbol,
  apikey,
  refreshInterval,
}: DashboardProps) => {
  return (
    <div className={styles.container}>
      <PageTitle
        title="R2Stocks Widget"
        description={`Tracking ${symbol} in real time.`}
      />
      <CardsList
        symbol={symbol}
        apikey={apikey}
        refreshInterval={refreshInterval}
      />
    </div>
  );
};
