import { init } from "./init";

declare global {
  interface Window {
    StocksSnapshot?: {
      init: typeof init;
    };
  }
}

window.StocksSnapshot = {
  init,
};