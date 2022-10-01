import type { _LaunchModel } from '@lib/frontend/platform/utils/launch/_launch.models';
import type { Browser, Page } from 'puppeteer';
import { launch } from 'puppeteer';

let _browser: Browser;
let _page: Page;

export const _launch = async (): Promise<_LaunchModel> => {
  _browser = _browser || (await launch());
  _page = _page || (await _browser.newPage());

  return {
    close: async () => _browser.close(),
    open: async (route) => {
      await _page.goto(route);
    },
  };
};
