import { type Browser, type Page } from 'puppeteer';
import { launch } from 'puppeteer';

import { type _ScreenModel } from '#lib-frontend/test/utils/screen/_screen.models';

let browser: Browser;
let page: Page;

export const _screen = async (): Promise<_ScreenModel> => {
  browser = browser || (await launch({ headless: 'new' }));
  page = page || (await browser.newPage());

  return {
    click: async (testID) => {
      const selector = `[data-testid="${testID}"]`;
      await page.waitForSelector(selector);
      await page.click(selector);
    },

    close: async () => browser.close(),

    open: async (route) => {
      await page.goto(route);
    },

    type: async (testID, value) => {
      const selector = `[data-testid="${testID}"] input`;
      await page.waitForSelector(selector);
      await page.type(selector, value);
    },
  };
};
