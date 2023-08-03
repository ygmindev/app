import { type Browser, type Page } from 'puppeteer';
import { launch } from 'puppeteer';

import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '#lib-backend/file/utils/joinPaths/joinPaths';
import { sleepForEffect } from '#lib-frontend/animation/utils/sleepForEffect/sleepForEffect';
import { APP_URI } from '#lib-frontend/http/http.constants';
import { slug } from '#lib-frontend/route/utils/slug/slug';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import {
  type _ScreenModel,
  type _ScreenParamsModel,
} from '#lib-frontend/test/utils/screen/_screen.models';

let browser: Browser;
let page: Page;

export const _screen = async ({
  dimension,
  isBrowser,
  outputPath,
  snapshotPath,
  snapshotPrefix,
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
      await page.goto(`${APP_URI}${trimPathname(route)}`, { timeout, waitUntil: 'networkidle0' });
    },

    press: async (testID) => {
      const selector = `[data-testid="${testID}"]`;
      await page.waitForSelector(selector, { timeout });
      await page.$eval(selector, (element) => (element as HTMLButtonElement).click());
    },

    snapshot: async ({ match = false } = {}) => {
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
      await page.keyboard.type(value);
    },
  };
};
