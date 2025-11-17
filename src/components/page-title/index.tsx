import styles from "./page-title.module.css";

type Props = {
  title: string;
  description: string;
};

export const PageTitle = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
