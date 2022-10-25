import type { _ScreenModel } from '@lib/frontend/testing/utils/screen/_screen.models';
import type { Browser, Page } from 'puppeteer';
import { launch } from 'puppeteer';

let _browser: Browser;
let _page: Page;

export const _screen = async (): Promise<_ScreenModel> => {
  _browser = _browser || (await launch({ headless: true }));
  _page = _page || (await _browser.newPage());

  return {
    click: async (testID) => {
      const selector = `[data-testid="${testID}"]`;
      await _page.waitForSelector(selector);
      await _page.click(selector);
    },

    close: async () => _browser.close(),

    open: async (route) => {
      await _page.goto(route);
    },

    type: async (testID, value) => {
      const selector = `[data-testid="${testID}"] input`;
      await _page.waitForSelector(selector);
      await _page.type(selector, value);
    },
  };
};
