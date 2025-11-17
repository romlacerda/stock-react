export const Chart = ({ isPositive = true }: { isPositive?: boolean }) => {
  return (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="5"
        y1="30"
        x2="60"
        y2="20"
        stroke={
          isPositive
            ? "var(--stocks-positive-color)"
            : "var(--stocks-negative-color)"
        }
        stroke-width="2"
        stroke-linecap="round"
      />

      <line
        x1="60"
        y1="20"
        x2="115"
        y2="5"
        stroke={
          isPositive
            ? "var(--stocks-positive-color)"
            : "var(--stocks-negative-color)"
        }
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
