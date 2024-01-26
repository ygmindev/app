import { SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import { type SelectorPathModel } from '@lib/config/crawling/screen/screen.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/_withScreen.models';
import { KEY_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { type ScreenModel } from '@lib/shared/crawling/utils/withScreen/withScreen.models';
import { type ElementHandle, launch } from 'puppeteer';

export const _withScreen = async (
  ...[callback, { delay, dimension, isHeadless, timeout }]: _WithScreenParamsModel
): Promise<_WithScreenModel> => {
  let isOpen: boolean;

  const browser = await launch({
    args: dimension ? [`--window-size-${dimension.width},${dimension.height}`] : undefined,
    defaultViewport: null,
    headless: isHeadless ? 'new' : false,
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  const selectByText = async <TType extends Element>({
    handles,
    isMultiple,
    value,
  }: {
    handles?: Array<ElementHandle<TType>>;
    isMultiple?: boolean;
    value: string;
  }): Promise<Array<ElementHandle<TType>>> => {
    const handlesF = handles ?? ((await page.$$('body *')) as Array<ElementHandle<TType>>);
    let result: Array<ElementHandle<TType>> = [];
    for (const handle of handlesF) {
      const innerText = await handle.evaluate((e) => (e as unknown as HTMLSpanElement).innerText);
      if (innerText === value) {
        result.push(handle);
        if (!isMultiple) {
          break;
        }
      }
      const children = await selectByText({ handles: await handle.$$('*'), value });
      if (children?.length) {
        result = [...result, ...(children as Array<ElementHandle<TType>>)];
        if (!isMultiple) {
          break;
        }
      }
    }
    return result;
  };

  const select = async <TType extends Element>({
    conditions,
    handles,
    isMultiple,
    target,
  }: {
    conditions?: Array<SelectorPathModel>;
    handles?: Array<ElementHandle<TType>>;
    isMultiple?: boolean;
    target: SelectorPathModel;
  }): Promise<Array<ElementHandle<TType>>> => {
    const handlesF = handles ?? ((await page.$$('body *')) as Array<ElementHandle<TType>>);
    let result: Array<ElementHandle<TType>> = [];
    for (const handle of handlesF) {
      if (target.type === SELECTOR_TYPE.TEXT) {
        result = [
          ...result,
          ...(await selectByText({ handles: [handle], isMultiple, value: target.value })),
        ];
      } else {
        const selector = await (async () => {
          switch (target.type) {
            case SELECTOR_TYPE.DATA:
              return `[data-${target.key}="${target.value}"]`;
            case SELECTOR_TYPE.ID:
              return `#${target.value}`;
            default:
              return target.value;
          }
        })();
        if (isMultiple) {
          const selected = await handle.$$(selector);
          selected?.length && (result = [...result, ...(selected as Array<ElementHandle<TType>>)]);
        } else {
          const selected = await handle.$(selector);
          selected && result.push(selected as ElementHandle<TType>);
          break;
        }
      }
    }

    if (conditions?.length) {
      const [condition, ...conditionsF] = conditions;
      const resultF: Array<ElementHandle<TType>> = [];
      for (const handle of result) {
        const selected = await select({
          conditions: conditionsF,
          handles: [handle],
          target: condition,
        });
        if (selected) {
          resultF.push(handle);
          if (!isMultiple) {
            break;
          }
        }
      }
      return resultF;
    }

    return result;
  };

  const screen: ScreenModel = {
    close: async () => {
      isOpen = false;
      await browser.close();
    },

    goto: async (route) => {
      isOpen && (await page.waitForNavigation({ timeout, waitUntil: 'networkidle0' }));
      await page.goto(route, { timeout, waitUntil: 'networkidle0' });
      isOpen = true;
      await sleep(delay);
    },

    key: async ({ isDelay, value }) => {
      isDelay && (await sleep(delay));
      const input = (() => {
        switch (value) {
          case KEY_TYPE.ENTER:
            return 'Enter';
          case KEY_TYPE.UP:
            return 'ArrowUp';
          case KEY_TYPE.DOWN:
            return 'ArrowDown';
          default:
            throw new InvalidArgumentError();
        }
      })();
      await page.keyboard.press(input);
    },

    press: async ({ conditions, isDelay, target }) => {
      isDelay && (await sleep(delay));
      const element = (await select<HTMLButtonElement>({ conditions, target }))?.[0];
      await element?.click();
    },

    snapshot: async () => {
      await sleep(delay);
      return page.screenshot();
    },

    type: async ({ conditions, isDelay, target, value }) => {
      isDelay && (await sleep(delay));
      const element = (await select<HTMLInputElement>({ conditions, target }))?.[0];
      await element?.type(value);
      // await sleepForEffect();
      // void element?.focus();
      // await sleepForEffect();
      // await page.keyboard.type(value);
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
