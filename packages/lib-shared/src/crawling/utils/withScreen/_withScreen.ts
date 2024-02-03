import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/_withScreen.models';
import {
  KEY_TYPE,
  SELECTOR_TYPE,
} from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import {
  type HandleModel,
  type ScreenModel,
  type SelectorModel,
  type SelectorOptionModel,
} from '@lib/shared/crawling/utils/withScreen/withScreen.models';
import { existsSync, mkdirSync } from 'fs';
import { type ElementHandle } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

export const _withScreen = async (
  ...[
    callback,
    { delay, delayDefault, dimension, isHeadless, snapshotPath, timeout },
  ]: _WithScreenParamsModel
): Promise<_WithScreenModel> => {
  let isOpen: boolean;

  const browser = await puppeteer.launch({
    args: dimension ? [`--window-size-${dimension.width},${dimension.height}`] : undefined,
    defaultViewport: dimension,
    headless: isHeadless ? 'new' : false,
    ignoreDefaultArgs: ['--hide-scrollbars'],
    ignoreHTTPSErrors: true,
  });

  const page = await browser.newPage();

  const getSelector = (selector: SelectorModel): string => {
    switch (selector.type) {
      case SELECTOR_TYPE.DATA:
        return `[${selector.key}="${selector.value}"]`;
      case SELECTOR_TYPE.ID:
        return `#${selector.value}`;
      case SELECTOR_TYPE.TEXT:
        return `::-p-text(${selector.value})`;
      default:
        return selector.value;
    }
  };

  const findF = async (
    selector: SelectorModel,
    {
      index = -1,
      isDelay,
      isThrow = true,
      isWait = true,
    }: SelectorOptionModel & { index?: number } = {},
    handle?: ElementHandle,
  ): Promise<HandleModel | null> => {
    await sleep(isDelay ? delay : delayDefault);
    const selectorF = getSelector(selector);
    try {
      isWait && (await (handle ?? page).waitForSelector(selectorF, { timeout }));
    } catch (_) {}
    let selected;
    if (index >= 0) {
      selected = (await (handle ?? page).$$(selectorF))?.[index];
    } else {
      selected = await (handle ?? page).$(selectorF);
    }
    if (selected) {
      return new _Handle(selected);
    }
    isThrow && new NotFoundError(stringify(selector));
    return null;
  };

  const findAllF = async (
    selector: SelectorModel,
    { isDelay, isThrow = true, isWait = true }: SelectorOptionModel = {},
    handle?: ElementHandle,
  ): Promise<Array<HandleModel>> => {
    await sleep(isDelay ? delay : delayDefault);
    const selectorF = getSelector(selector);
    try {
      isWait && (await (handle ?? page).waitForSelector(selectorF, { timeout }));
    } catch (_) {}
    const selected = await (handle ?? page).$$(selectorF);
    if (selected) {
      return selected?.map((v) => new _Handle(v));
    }
    isThrow && new NotFoundError(stringify(selector));
    return [];
  };

  class _Handle implements HandleModel {
    handle?: ElementHandle<Element>;

    constructor(handle?: ElementHandle) {
      this.handle = handle;
    }

    async find(
      selector: SelectorModel,
      options: SelectorOptionModel = {},
    ): Promise<HandleModel | null> {
      return findF(selector, options, this.handle);
    }

    async has(selector: SelectorModel): Promise<HandleModel | null> {
      const selected = await findF(selector, { isThrow: false, isWait: false }, this.handle);
      return selected ? this : null;
    }

    async findAll(
      selector: SelectorModel,
      options: SelectorOptionModel = {},
    ): Promise<Array<HandleModel>> {
      return findAllF(selector, options, this.handle);
    }

    async press(): Promise<void> {
      this.handle?.click && (await this.handle?.click());
    }

    async previous(): Promise<HandleModel | null> {
      const previous = await this.handle?.evaluateHandle((h) => h?.previousElementSibling);
      return previous ? new _Handle(previous as ElementHandle) : null;
    }

    async next(): Promise<HandleModel | null> {
      const next = await this.handle?.evaluateHandle((h) => h?.nextElementSibling);
      return next ? new _Handle(next as ElementHandle) : null;
    }

    async url(): Promise<string | null> {
      const text = await this.handle?.evaluate(async (el) => (el as HTMLAnchorElement).href);
      return text ?? null;
    }

    async src(): Promise<string | null> {
      const text = await this.handle?.evaluate(async (el) => (el as HTMLImageElement).src);
      return text ?? null;
    }

    async value(): Promise<string | null> {
      const text = await this.handle?.evaluate(async (el) => (el as HTMLInputElement).value);
      return text ?? null;
    }

    async select(value: string): Promise<void> {
      this.handle?.select && (await this.handle?.select(value));
    }

    async text(): Promise<string | null> {
      const text = await this.handle?.evaluate(async (el) => (el as HTMLSpanElement).innerText);
      return text ?? null;
    }

    async type(value: string): Promise<void> {
      this.handle?.click && (await this.handle?.type(value));
    }
  }

  const screen: ScreenModel = {
    close: async () => {
      isOpen = false;
      await browser.close();
    },

    find: findF,

    findAll: findAllF,

    key: async (value, { isDelay } = {}): Promise<void> => {
      await sleep(isDelay ? delay : delayDefault);
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

    open: async (route) => {
      await page.goto(route, { timeout, waitUntil: 'networkidle0' });
      isOpen = true;
    },

    snapshot: async ({ filename } = {}) => {
      await page.$eval('[banneroffsetheight="0"]', (h) => h?.remove());
      const element = await page.$('#bookingFunnelBody > div').then((h) => h?.boundingBox());
      const dirname = joinPaths([fromWorking(), snapshotPath]);
      !existsSync(dirname) && mkdirSync(dirname, { recursive: true });
      return page.screenshot({
        clip: {
          height: element?.height ?? dimension.height,
          width: element?.width ?? dimension.width,
          x: 0,
          y: 0,
        },
        path: filename ? joinPaths([dirname, `${filename}.png`]) : undefined,
      });
    },

    uri: () => {
      const { host, pathname, port } = new URL(page.url());
      return { host, pathname, port };
    },
  };

  try {
    await callback(screen);
  } finally {
    await browser.close();
  }
};
