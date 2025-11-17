import { render } from "preact";
import { WidgetApp } from "./widget-app";
import { getWidgetStyles } from "./widget-styles";

type InitOptions = {
  containerId: string;
  symbol?: string;
  apikey?: string;
  theme?: "dark" | "light";
  refreshInterval?: number;
};

export function init(options: InitOptions) {
  const {
    containerId,
    symbol,
    apikey,
    refreshInterval = 60_000,
    theme,
  } = options;

  return new Promise<void>((resolve, reject) => {
    const host = document.getElementById(containerId);

    if (!host) {
      reject(new Error(`Container with id "${containerId}" not found`));
      return;
    }

    const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = getWidgetStyles(theme);
    shadow.innerHTML = "";
    shadow.appendChild(style);

    const mount = document.createElement("div");
    mount.className = "widget-root";
    shadow.appendChild(mount);

    try {
      render(
        <WidgetApp
          symbol={symbol}
          apikey={apikey}
          refreshInterval={refreshInterval}
        />,
        mount
      );

      requestAnimationFrame(() => resolve());
    } catch (err) {
      reject(err);
    }
  });
}
