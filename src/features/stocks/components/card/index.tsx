import { Chart } from "../chart";
import styles from "./card.module.css";

type StockCard = {
  key: string;
  values: {
    open: number;
    close: number;
  };
};

export const Card = ({ stock }: { stock: StockCard }) => {
  const floating =
    ((stock.values.close - stock.values.open) / stock.values.open) * 100;

  const absoluteFloating = stock.values.close - stock.values.open;

  const isPositive = absoluteFloating > 0;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{stock.key}</h3>
        <span
          className={
            isPositive
              ? styles.positiveFloatingBadge
              : styles.negativeFloatingBadge
          }
        >
          {floating.toFixed(2)}%
        </span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyContent}>
          <span className={styles.stockPrice}>
            ${Number(stock.values.close).toFixed(2).replace(".", ",")}
          </span>
          <span
            className={
              isPositive ? styles.positiveNumber : styles.negativeNumber
            }
          >
            {isPositive ? "+" : "-"}
            {absoluteFloating.toFixed(2)}
          </span>
          <Chart isPositive={isPositive} />
        </div>
      </div>
      <div className={styles.cardFooter}>
        Updated at {new Date().toLocaleString()}
      </div>
    </div>
  );
};
