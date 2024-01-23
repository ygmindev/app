import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import { type ScreenConfigModel } from '@lib/config/crawling/screen/screen.models';
import { sleepForEffect } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect';
import { sleepForTransition } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition';
import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/_withScreen.models';
import { type ScreenModel } from '@lib/shared/crawling/utils/withScreen/withScreen.models';
import { launch } from 'puppeteer';

export const _withScreen = async (
  ...[callback, options]: _WithScreenParamsModel
): Promise<_WithScreenModel> => {
  const { config } = await importConfig<ScreenConfigModel>('crawling/screen/screen');
  const { dimension, isHeadless, timeout } = config;

  let isOpen: boolean;

  const browser = await launch({
    args: dimension ? [`--window-size-${dimension.width},${dimension.height}`] : undefined,
    defaultViewport: null,
    headless: isHeadless ? 'new' : false,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  const screen: ScreenModel = {
    close: async () => {
      isOpen = false;
      await browser.close();
    },

    goto: async (route) => {
      isOpen && (await page.waitForNavigation({ timeout, waitUntil: 'networkidle0' }));
      await page.goto(route, { timeout, waitUntil: 'networkidle0' });
      isOpen = true;
      await sleepForTransition();
    },

    press: async (id) => {
      const selector = options.idSelector(id);
      await page.waitForSelector(selector, { timeout });
      await page.$eval(selector, (element) => (element as HTMLButtonElement).click());
    },

    snapshot: async () => {
      await sleepForEffect();
      return page.screenshot();
    },

    type: async (id, value) => {
      const selector = options.idSelector(id);
      await page.waitForSelector(selector, { timeout });
      const [input] = await page.$$(selector);
      await sleepForEffect();
      await input.focus();
      await sleepForEffect();
      value && (await page.keyboard.type(value));
    },

    uri: () => {
      const { host, pathname, port } = new URL(page.url());
      return { host, pathname, port };
    },

    waitForText: async (value) => {
      await page.waitForSelector(`div ::-p-text(${value})`);
    },
  };

  try {
    await callback(screen);
  } finally {
    await browser.close();
  }
};
