import { join } from 'path';
import { type Browser, type Page } from 'puppeteer';
import { launch } from 'puppeteer';

import {
  type _ScreenModel,
  type _ScreenParamsModel,
} from '#lib-frontend/test/utils/screen/_screen.models';
import { joinExtension } from '#lib-shared/core/utils/joinExtension/joinExtension';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

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
      headless: 'new',
      ignoreHTTPSErrors: true,
    }));
  page = page ?? (await browser.newPage());

  return {
    close: async () => browser.close(),

    goto: async (route) => {
      await page.goto(route);
    },

    press: async (testID) => {
      const selector = `[data-testid="${testID}"]`;
      await page.waitForSelector(selector);
      await sleep(1000);
      // await page.click(selector);
      // await page.focus(selector);
      // await page.keyboard.type('\n');
      await page.$eval(selector, (element) => (element as HTMLButtonElement).click());
      await sleep(1000);
    },

    snapshot: async ({ match = true, name, path }) => {
      const pathF = joinExtension(join(path ?? '', name), imageExtension);
      const img = await page.screenshot();
      match &&
        expect(img).toMatchImageSnapshot({
          customDiffDir: join(outputPath, 'diffs', pathF),
          customReceivedDir: join(outputPath, 'received', pathF),
          customSnapshotsDir: join(outputPath, 'snapshots', pathF),
        });
    },

    type: async (testID, value) => {
      const selector = `[data-testid="${testID}"] input`;
      await page.waitForSelector(selector);
      await page.type(selector, value);
    },
  };
};
