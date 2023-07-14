import { join } from 'path';
import { type Browser, type Page } from 'puppeteer';
import { launch } from 'puppeteer';

import { slug } from '#lib-frontend/route/utils/slug/slug';
import {
  type _ScreenModel,
  type _ScreenParamsModel,
} from '#lib-frontend/test/utils/screen/_screen.models';

let browser: Browser;
let page: Page;

export const _screen = async ({
  dimension,
  imageExtension,
  outputPath,
}: _ScreenParamsModel): Promise<_ScreenModel> => {
  browser =
    browser ??
    (await launch({
      args: dimension ? [`--window-size-${dimension.width},${dimension.height}`] : undefined,
      defaultViewport: null,
      headless: 'new',
      ignoreHTTPSErrors: true,
    }));
  page = page ?? (await browser.newPage());

  return {
    close: async () => browser.close(),

    goto: async (route) => {
      await page.goto(route, { waitUntil: 'networkidle0' });
    },

    press: async (testID) => {
      const selector = `[data-testid="${testID}"]`;
      await page.waitForSelector(selector);
      await page.$eval(selector, (element) => (element as HTMLButtonElement).click());
    },

    snapshot: async ({ match = true, name }) => {
      const img = await page.screenshot();
      match &&
        expect(img).toMatchImageSnapshot({
          customDiffDir: join(outputPath, 'diffs'),
          customReceivedDir: join(outputPath, 'received'),
          customSnapshotIdentifier: ({ currentTestName }) =>
            join(slug(currentTestName), slug(name)),
          customSnapshotsDir: join(outputPath, 'snapshots'),
        });
    },

    type: async (testID, value) => {
      const selector = `[data-testid="${testID}"] input`;
      await page.waitForSelector(selector);
      await page.focus(selector);
      await page.type(selector, value);
    },
  };
};
