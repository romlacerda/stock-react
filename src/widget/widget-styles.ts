import cardStylesRaw from '../features/stocks/components/card/card.module.css?raw';
import cardsListStylesRaw from '../features/stocks/components/cards-list/cards-list.module.css?raw';
import pageTitleStylesRaw from '../components/page-title/page-title.module.css?raw';
import dashboardStylesRaw from '../routes/app/dashboard.module.css?raw';
import chartStylesRaw from '../features/stocks/components/chart/chart.module.css?raw';

const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
  }
  
  :host {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .widget-root {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background: linear-gradient(135deg,#2c9aff15 0%,var(--stocks-bg-color) 50%,var(--stocks-bg-color) 100%);
  }
`;

const darkTheme = `
  :host {
    --primary-color: #2c9aff;
    --background-dark: #161616;
    --text-color: rgba(255, 255, 255, 0.87);
    --stocks-positive-color: #34c759;
    --stocks-negative-color: #ff3b30;
    --stocks-bg-color: #1c1c1e;
    --stocks-text-color: #ffffff;
    --stocks-text-secondary: #98989d;
    --stocks-border-color: #38383a;
    color-scheme: dark;
    color: var(--text-color);
  }
`;

const lightTheme = `
  :host {
    --primary-color: #2c9aff;
    --background-dark: #f5f5f7;
    --text-color: rgba(0, 0, 0, 0.87);
    --stocks-positive-color: #34c759;
    --stocks-negative-color: #ff3b30;
    --stocks-bg-color: #ffffff;
    --stocks-text-color: #000000;
    --stocks-text-secondary: #6e6e73;
    --stocks-border-color: #d2d2d7;
    color-scheme: light;
    color: var(--text-color);
  }
`;

export function getWidgetStyles(theme?: "dark" | "light") {
  const themeStyles = theme === "light" ? lightTheme : darkTheme;
  
  return `
    ${baseStyles}
    ${themeStyles}
    ${cardStylesRaw}
    ${cardsListStylesRaw}
    ${pageTitleStylesRaw}
    ${dashboardStylesRaw}
    ${chartStylesRaw}
  `;
}

