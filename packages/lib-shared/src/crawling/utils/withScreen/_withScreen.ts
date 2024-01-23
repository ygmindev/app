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

    press: async (params) => {
      const selectorF = options.idSelector(params);
      await page.waitForSelector(selectorF, { timeout });
      await page.$eval(selectorF, (element) => (element as HTMLButtonElement).click());
    },

    snapshot: async () => {
      await sleepForEffect();
      return page.screenshot();
    },

    type: async (text, params) => {
      const selectorF = options.idSelector(params);
      await page.waitForSelector(selectorF, { timeout });
      const [input] = await page.$$(selectorF);
      await sleepForEffect();
      await input.focus();
      await sleepForEffect();
      text && (await page.keyboard.type(text));
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
