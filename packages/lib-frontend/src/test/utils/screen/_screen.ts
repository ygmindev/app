import { join } from 'path';
import { type Browser, type Page } from 'puppeteer';
import { launch } from 'puppeteer';

import { joinPaths } from '#lib-backend/file/utils/joinPaths/joinPaths';
import { sleepForEffect } from '#lib-frontend/animation/utils/sleepForEffect/sleepForEffect';
import { slug } from '#lib-frontend/route/utils/slug/slug';
import {
  type _ScreenModel,
  type _ScreenParamsModel,
} from '#lib-frontend/test/utils/screen/_screen.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

let browser: Browser;
let page: Page;

export const _screen = async ({
  delay,
  dimension,
  imageExtension,
  isBrowser,
  outputDir,
  timeout,
}: _ScreenParamsModel): Promise<_ScreenModel> => {
  browser =
    browser ??
    (await launch({
      args: dimension ? [`--window-size-${dimension.width},${dimension.height}`] : undefined,
      defaultViewport: null,
      headless: isBrowser ? false : 'new',
      ignoreHTTPSErrors: true,
    }));
  page = page ?? (await browser.newPage());

  return {
    close: async () => browser.close(),

    goto: async (route) => {
      await page.goto(route, { timeout, waitUntil: 'networkidle0' });
    },

    press: async (testID) => {
      const selector = `[data-testid="${testID}"]`;
      await page.waitForSelector(selector, { timeout });
      await page.$eval(selector, (element) => (element as HTMLButtonElement).click());
    },

    snapshot: async ({ match = true } = {}) => {
      await sleep(delay);
      const img = await page.screenshot();
      match &&
        expect(img).toMatchImageSnapshot({
          customDiffDir: join(outputDir, 'diffs'),
          customReceivedDir: join(outputDir, 'received'),
          customSnapshotIdentifier: ({ counter, currentTestName }) =>
            joinPaths({
              extension: imageExtension,
              paths: [slug(currentTestName), counter.toString()],
            }),
          customSnapshotsDir: join(outputDir, 'snapshots'),
        });
    },

    type: async (testID, value) => {
      const selector = `[data-testid="${testID}"] input`;
      await page.waitForSelector(selector, { timeout });
      const [input] = await page.$$(selector);
      await sleep(delay);
      await input.focus();
      await sleepForEffect();
      await page.keyboard.type(value);
    },
  };
};
