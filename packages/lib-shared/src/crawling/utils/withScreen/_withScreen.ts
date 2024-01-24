import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import { SELECTOR_TYPE } from '@lib/config/crawling/screen/screen.constants';
import {
  type ScreenConfigModel,
  type SelectorPathModel,
} from '@lib/config/crawling/screen/screen.models';
import { sleepForEffect } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect';
import { sleepForTransition } from '@lib/frontend/animation/utils/sleepForTransition/sleepForTransition';
import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/_withScreen.models';
import { type ScreenModel } from '@lib/shared/crawling/utils/withScreen/withScreen.models';
import { type ElementHandle, launch } from 'puppeteer';

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

  const selectByText = async <TType extends Element>({
    handles,
    isMultiple,
    value,
  }: {
    handles?: Array<ElementHandle<TType>>;
    isMultiple?: boolean;
    value: string;
  }): Promise<Array<ElementHandle<TType>>> => {
    const handlesF = handles ?? ((await page.$$('*')) as Array<ElementHandle<TType>>);
    let result: Array<ElementHandle<TType>> = [];
    for (const handle of handlesF) {
      const innerText = await handle.evaluate((e) => (e as unknown as HTMLSpanElement).innerText);
      if (innerText?.toLowerCase()?.includes(value.toLowerCase())) {
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
    const handlesF = handles ?? ((await page.$$('*')) as Array<ElementHandle<TType>>);
    let result: Array<ElementHandle<TType>> = [];
    for (const handle of handlesF) {
      if (target.type === SELECTOR_TYPE.TEXT) {
        if ((await selectByText({ handles: [handle], isMultiple, value: target.value })).length) {
          void handle.evaluate((e) => console.warn(e));
        }
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
              return `#${target.value}}`;
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

    if (conditions) {
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
      await sleepForTransition();
    },

    press: async ({ conditions, target }) => {
      const element = (await select<HTMLButtonElement>({ conditions, target }))?.[0];
      await element?.click();
    },

    snapshot: async () => {
      await sleepForEffect();
      return page.screenshot();
    },

    type: async ({ conditions, target, value }) => {
      const element = (await select<HTMLInputElement>({ conditions, target }))?.[0];
      await sleepForEffect();
      void element?.focus();
      await sleepForEffect();
      await page.keyboard.type(value);
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
