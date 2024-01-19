import { launch } from 'puppeteer';

import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { sleepForEffect } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect';
import { sleepForTransition } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition';
import { slug } from '@lib/frontend/route/utils/slug/slug';
import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '@lib/frontend/test/utils/withScreen/_withScreen.models';
import { type ScreenModel } from '@lib/frontend/test/utils/withScreen/withScreen.models';

export const _withScreen = async (
  ...[
    callback,
    { dimension, isBrowser, outputPath, snapshotPath, snapshotPrefix, timeout } = {
      dimension: undefined,
      isBrowser: false,
      outputPath: '',
      snapshotPath: '',
      snapshotPrefix: '',
      timeout: 0,
    },
  ]: _WithScreenParamsModel
): Promise<_WithScreenModel> => {
  let isOpen: boolean;

  const browser = await launch({
    args: dimension ? [`--window-size-${dimension.width},${dimension.height}`] : undefined,
    defaultViewport: null,
    headless: isBrowser ? false : 'new',
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

    press: async (testID) => {
      const selector = `[data-testid="${testID}"]`;
      await page.waitForSelector(selector, { timeout });
      await page.$eval(selector, (element) => (element as HTMLButtonElement).click());
    },

    snapshot: async ({ match = true } = {}) => {
      await sleepForEffect();
      const img = await page.screenshot();
      match &&
        expect(img).toMatchImageSnapshot({
          customDiffDir: fromWorking(outputPath, 'diffs'),
          customReceivedDir: fromWorking(outputPath, 'received'),
          customSnapshotIdentifier: ({ counter, currentTestName }) =>
            joinPaths([slug(currentTestName), `${snapshotPrefix}-${counter.toString()}`]),
          customSnapshotsDir: fromWorking(snapshotPath),
        });
    },

    type: async (testID, value) => {
      const selector = `[data-testid="${testID}"] input`;
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
