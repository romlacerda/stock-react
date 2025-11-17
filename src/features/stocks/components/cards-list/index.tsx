import { Card } from "../card";
import styles from "./cards-list.module.css";
import { useStocks } from "../../api/get-stocks";

type CardsListProps = {
  symbol?: string;
  apikey?: string;
  refreshInterval?: number;
};

export const CardsList = ({
  symbol,
  apikey,
  refreshInterval,
}: CardsListProps) => {
  const { stocks, isLoading } = useStocks({
    symbol,
    apikey,
    pollingInterval: refreshInterval,
  });

  if (isLoading) {
    return <div>Loading stocks...</div>;
  }

  return (
    <div className={styles.container}>
      {Array.from(stocks).map((stock) => (
        <Card key={stock[0]} stock={{ key: stock[0], values: stock[1] }} />
      ))}
    </div>
  );
};
