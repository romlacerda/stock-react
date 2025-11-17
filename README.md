# R2Stocks Widget

Real-time stock quotes widget that can be embedded in any website. Displays stock prices with automatic updates via polling.

## What it does

Shows stock information and automatically updates every minute (or configured interval). Works as a standalone widget that you can add to any HTML page.

## Usage

### As embedded widget

1. Add the script to your HTML:

```html
<script src="https://your-cdn.com/stocks.bundle.js"></script>
```

2. Create a container and initialize:

```html
<div id="stocks-widget"></div>

<script>
  StocksSnapshot.init({
    containerId: "stocks-widget",
    symbol: "IBM",
    apikey: "your-api-key",
    refreshInterval: 60000, // optional, default: 60000ms
    theme: "dark", // optional: 'dark' or 'light'
  });
</script>
```

### Initialization options

- `containerId` (required): ID of the HTML element where the widget will be rendered
- `symbol` (optional): Stock symbol (e.g., 'IBM', 'AAPL'). Default: 'IBM'
- `apikey` (optional): Alpha Vantage API key. If not provided, use 'demo'
- `refreshInterval` (optional): Update interval in ms. Default: 60000 (1 minute)
- `theme` (optional): 'dark' or 'light' theme. Default: 'dark'

## Development

### Setup

```bash
npm install
```

### Run in dev mode

```bash
npm run dev
```

### Build

```bash
# Build React app
npm run build

# Build standalone widget
npm run build:widget
```

The widget will be generated in `dist/widget/stocks.bundle.js`.

### Tests

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e
```

## Structure

- `src/widget/` - Embeddable widget code
- `src/features/stocks/` - Business logic (API, components, hooks)
- `src/routes/app/` - Main dashboard
- `demo/` - Widget demonstration page

## Environment variables

### For development (React app)

Create a `.env.local` file in the root:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```
VITE_ALPHA_VANTAGE_API_URL=alphavantage.co
VITE_API_KEY=your-api-key
```

### For widget build

When building the widget (`npm run build:widget`), the **base URL** (`VITE_ALPHA_VANTAGE_API_URL`) is baked into the bundle. This means:

- Set `VITE_ALPHA_VANTAGE_API_URL` in your `.env.local` before building
- The API key is must be passed via `init()` options

Example:

```html
<script>
  StocksSnapshot.init({
    containerId: "stocks-widget",
    symbol: "IBM",
    apikey: "user-api-key-here", // User provides their own key
    theme: "dark",
  });
</script>
```

## Stack

- Preact (lighter React)
- TypeScript
- Vite
- Vitest + Playwright for testing
- CSS Modules

## Notes

- Widget uses Shadow DOM for style isolation
- Optimized bundle: native fetch instead of axios
- Supports dark/light themes
- Configurable automatic updates via polling
