import { test, expect } from '@playwright/test';

test.describe('Stocks Widget', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForFunction(() => typeof window.StocksSnapshot !== 'undefined', { timeout: 10000 });
    await page.waitForFunction(
      () => {
        const container = document.getElementById('stocks-widget');
        return container?.shadowRoot !== null;
      },
      { timeout: 10000 }
    );
  });

  test('should load widget successfully', async ({ page }) => {
    const container = page.locator('#stocks-widget');
    await expect(container).toBeVisible({ timeout: 10000 });

    const shadowRoot = await container.evaluate((el) => el.shadowRoot);
    expect(shadowRoot).toBeTruthy();
  });

  test('should display stock information', async ({ page }) => {
    const hasContent = await page.waitForFunction(
      () => {
        const container = document.getElementById('stocks-widget');
        const shadowRoot = container?.shadowRoot;
        return shadowRoot?.textContent?.includes('R2Stocks Widget') ?? false;
      },
      { timeout: 15000 }
    );

    expect(hasContent).toBeTruthy();
  });

});

