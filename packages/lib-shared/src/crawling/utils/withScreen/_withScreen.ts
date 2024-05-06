import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
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
import { info } from '@lib/shared/logging/utils/logger/logger';
import chromium from '@sparticuz/chromium';
import { existsSync, mkdirSync } from 'fs';
import isNumber from 'lodash/isNumber';
import { type ElementHandle, type Page } from 'puppeteer-core';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

chromium.setHeadlessMode = true;

chromium.setGraphicsMode = false;

export const _withScreen = async (
  ...[
    callback,
    {
      delay,
      delayDefault,
      dimension,
      elementTimeout,
      isHeadless,
      isIgnoreMedia,
      navigationTimeout,
      proxies,
      snapshotPath,
    },
  ]: _WithScreenParamsModel
): Promise<_WithScreenModel> => {
  const isProduction = process.env.NODE_ENV === 'production';
  const proxy = !!proxies?.length && proxies[Math.floor(Math.random() * proxies.length)];
  const browser = await puppeteer.launch({
    args: filterNil([
      ...(isProduction ? chromium.args : []),
      proxy && `--proxy-server=${proxy.url}`,
      '--disable-dev-shm-usage',
      '--disable-features=NetworkServiceInProcess2',
      '--disable-features=site-per-process',
      '--disable-gpu',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--no-first-run',
      '--no-sandbox',
      '--no-zygote',
    ])
      .filter((v) => !v.includes('--use-gl'))
      .filter(Boolean),
    defaultViewport: chromium.defaultViewport,
    executablePath: isProduction ? await chromium.executablePath() : undefined,
    headless: isProduction ? chromium.headless : isHeadless,
    ignoreHTTPSErrors: true,
    protocolTimeout: 0,
  });

  const page = await browser.newPage();
  proxy && (await page.authenticate({ password: proxy.password, username: proxy.username }));

  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  );
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const type = req.resourceType();
    if (isIgnoreMedia && (type === 'image' || type === 'font' || type === 'media')) {
      void req.abort();
    } else {
      const headers = req.headers();
      void req.continue(headers);
    }
  });

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
      isThrow = false,
      timeout: timeoutF = true,
    }: SelectorOptionModel & { index?: number } = {},
    handle?: ElementHandle,
  ): Promise<HandleModel | null> => {
    await sleep(isDelay ? delay : delayDefault);
    const selectorF = getSelector(selector);
    try {
      info(`Finding ${stringify(selector)}...`);
      elementTimeout &&
        (await (handle ?? page).waitForSelector(selectorF, {
          timeout: isNumber(timeoutF) ? timeoutF : elementTimeout,
        }));
    } catch (e) {}
    let selected: ElementHandle;
    if (index >= 0) {
      selected = (await (handle ?? page).$$(selectorF))?.[index] as ElementHandle<Element>;
    } else {
      selected = (await (handle ?? page).$(selectorF)) as ElementHandle;
    }
    if (selected) {
      info(`Found ${stringify(selector)}!`);
      return new _Handle(selected);
    }
    isThrow && new NotFoundError(stringify(selector));
    return null;
  };

  const findAllF = async (
    selector: SelectorModel,
    { isDelay, isThrow = true, timeout: timeoutF = true }: SelectorOptionModel = {},
    handle?: ElementHandle,
  ): Promise<Array<HandleModel>> => {
    await sleep(isDelay ? delay : delayDefault);
    const selectorF = getSelector(selector);
    try {
      info(`Finding all ${stringify(selector)}...`);
      elementTimeout &&
        (await (handle ?? page).waitForSelector(selectorF, {
          timeout: isNumber(timeoutF) ? timeoutF : elementTimeout,
        }));
    } catch (e) {}
    const selected = await (handle ?? page).$$(selectorF);
    if (selected) {
      info(`Found all ${stringify(selector)}!`);
      return selected?.map((v) => new _Handle(v as ElementHandle<Element>));
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
      const selected = await findF(selector, { isThrow: false, timeout: false }, this.handle);
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

    async parent(): Promise<HandleModel | null> {
      const parent = await this.handle?.evaluateHandle((h) => h?.parentNode);
      return parent ? new _Handle(parent as ElementHandle) : null;
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
      const text = await this.handle?.evaluate(async (el) => (el as HTMLAnchorElement)?.href);
      return text ?? null;
    }

    async content(): Promise<string | null> {
      const text = await this.handle?.evaluate(async (el) => el?.innerHTML);
      return text ?? null;
    }

    async src(): Promise<string | null> {
      const text = await this.handle?.evaluate(async (el) => (el as HTMLImageElement)?.src);
      return text ?? null;
    }

    async value(): Promise<string | null> {
      const text = await this.handle?.evaluate(async (el) => (el as HTMLInputElement)?.value);
      return text ?? null;
    }

    async select(value: string): Promise<void> {
      this.handle?.select && (await this.handle?.select(value));
    }

    async text(): Promise<string | null> {
      const text = await this.handle?.evaluate(async (el) => (el as HTMLSpanElement)?.innerText);
      return text ?? null;
    }

    async type(value: string): Promise<void> {
      this.handle?.click && (await this.handle?.type(value));
    }
  }

  const screen: ScreenModel = {
    close: async () => {
      await page.close();
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
      console.warn('@@@goto??');
      // await page.goto(route, { timeout: navigationTimeout, waitUntil: 'domcontentloaded' });
      await page.goto(route, { timeout: navigationTimeout, waitUntil: 'networkidle2' });
      console.warn('@@@goto!!');
      await sleep(delayDefault);
    },

    snapshot: async ({ filename } = {}) => {
      await (page as unknown as Page).$eval('[banneroffsetheight="0"]', (h) => h?.remove());
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
// import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
// import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
// import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
// import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
// import { sleep } from '@lib/shared/core/utils/sleep/sleep';
// import { stringify } from '@lib/shared/core/utils/stringify/stringify';
// import {
//   type _WithScreenModel,
//   type _WithScreenParamsModel,
// } from '@lib/shared/crawling/utils/withScreen/_withScreen.models';
// import {
//   KEY_TYPE,
//   SELECTOR_TYPE,
// } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
// import {
//   type HandleModel,
//   type ScreenModel,
//   type SelectorModel,
//   type SelectorOptionModel,
// } from '@lib/shared/crawling/utils/withScreen/withScreen.models';
// import { info } from '@lib/shared/logging/utils/logger/logger';
// import chromium from '@sparticuz/chromium';
// import { existsSync, mkdirSync } from 'fs';
// import isNumber from 'lodash/isNumber';
// import { type ElementHandle, type Page } from 'puppeteer-core';
// import puppeteer from 'puppeteer-extra';
// import StealthPlugin from 'puppeteer-extra-plugin-stealth';

// puppeteer.use(StealthPlugin());

// chromium.setHeadlessMode = true;

// chromium.setGraphicsMode = false;

// export const _withScreen = async (
//   ...[
//     callback,
//     {
//       delay,
//       delayDefault,
//       dimension,
//       elementTimeout,
//       isHeadless,
//       isIgnoreMedia,
//       navigationTimeout,
//       snapshotPath,
//     },
//   ]: _WithScreenParamsModel
// ): Promise<_WithScreenModel> => {
//   const isProduction = process.env.NODE_ENV === 'production';
//   const browser = await puppeteer.launch({
//     args: [
//       ...(isProduction ? chromium.args : []),
//       '--disable-dev-shm-usage',
//       '--disable-features=NetworkServiceInProcess2',
//       '--disable-features=site-per-process',
//       '--disable-gpu',
//       '--disable-setuid-sandbox',
//       '--disable-web-security',
//       '--no-first-run',
//       '--no-sandbox',
//       '--no-zygote',
//     ]
//       .filter((v) => !v.includes('--use-gl'))
//       .filter(Boolean),
//     defaultViewport: chromium.defaultViewport,
//     executablePath: isProduction ? await chromium.executablePath() : undefined,
//     headless: isProduction ? chromium.headless : isHeadless,
//     ignoreHTTPSErrors: true,
//     protocolTimeout: 0,
//   });

//   // await sleep(delayDefault);
//   const page = await browser.newPage();
//   // await sleep(delayDefault);

//   await page.setUserAgent(
//     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
//   );
//   await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });
//   await page.setRequestInterception(true);
//   page.on('request', (req) => {
//     const type = req.resourceType();
//     if (isIgnoreMedia && (type === 'image' || type === 'font' || type === 'media')) {
//       void req.abort();
//     } else {
//       const headers = req.headers();
//       void req.continue(headers);
//     }
//   });

//   const getSelector = (selector: SelectorModel): string => {
//     switch (selector.type) {
//       case SELECTOR_TYPE.DATA:
//         return `[${selector.key}="${selector.value}"]`;
//       case SELECTOR_TYPE.ID:
//         return `#${selector.value}`;
//       case SELECTOR_TYPE.TEXT:
//         return `::-p-text(${selector.value})`;
//       default:
//         return selector.value;
//     }
//   };

//   const findF = async (
//     selector: SelectorModel,
//     {
//       index = -1,
//       isDelay,
//       isThrow = false,
//       timeout: timeoutF = true,
//     }: SelectorOptionModel & { index?: number } = {},
//     handle?: ElementHandle,
//   ): Promise<HandleModel | null> => {
//     await sleep(isDelay ? delay : delayDefault);
//     const selectorF = getSelector(selector);
//     try {
//       info(`Finding ${stringify(selector)}...`);
//       elementTimeout &&
//         (await (handle ?? page).waitForSelector(selectorF, {
//           timeout: isNumber(timeoutF) ? timeoutF : elementTimeout,
//         }));
//     } catch (e) {}
//     let selected: ElementHandle;
//     if (index >= 0) {
//       selected = (await (handle ?? page).$$(selectorF))?.[index] as ElementHandle<Element>;
//     } else {
//       selected = (await (handle ?? page).$(selectorF)) as ElementHandle;
//     }
//     if (selected) {
//       info(`Found ${stringify(selector)}!`);
//       return new _Handle(selected);
//     }
//     isThrow && new NotFoundError(stringify(selector));
//     return null;
//   };

//   const findAllF = async (
//     selector: SelectorModel,
//     { isDelay, isThrow = true, timeout: timeoutF = true }: SelectorOptionModel = {},
//     handle?: ElementHandle,
//   ): Promise<Array<HandleModel>> => {
//     await sleep(isDelay ? delay : delayDefault);
//     const selectorF = getSelector(selector);
//     try {
//       info(`Finding all ${stringify(selector)}...`);
//       elementTimeout &&
//         (await (handle ?? page).waitForSelector(selectorF, {
//           timeout: isNumber(timeoutF) ? timeoutF : elementTimeout,
//         }));
//     } catch (e) {}
//     const selected = await (handle ?? page).$$(selectorF);
//     if (selected) {
//       info(`Found all ${stringify(selector)}!`);
//       return selected?.map((v) => new _Handle(v as ElementHandle<Element>));
//     }
//     isThrow && new NotFoundError(stringify(selector));
//     return [];
//   };

//   class _Handle implements HandleModel {
//     handle?: ElementHandle<Element>;

//     constructor(handle?: ElementHandle) {
//       this.handle = handle;
//     }

//     async find(
//       selector: SelectorModel,
//       options: SelectorOptionModel = {},
//     ): Promise<HandleModel | null> {
//       return findF(selector, options, this.handle);
//     }

//     async has(selector: SelectorModel): Promise<HandleModel | null> {
//       const selected = await findF(selector, { isThrow: false, timeout: false }, this.handle);
//       return selected ? this : null;
//     }

//     async findAll(
//       selector: SelectorModel,
//       options: SelectorOptionModel = {},
//     ): Promise<Array<HandleModel>> {
//       return findAllF(selector, options, this.handle);
//     }

//     async press(): Promise<void> {
//       this.handle?.click && (await this.handle?.click());
//     }

//     async parent(): Promise<HandleModel | null> {
//       const parent = await this.handle?.evaluateHandle((h) => h?.parentNode);
//       return parent ? new _Handle(parent as ElementHandle) : null;
//     }

//     async previous(): Promise<HandleModel | null> {
//       const previous = await this.handle?.evaluateHandle((h) => h?.previousElementSibling);
//       return previous ? new _Handle(previous as ElementHandle) : null;
//     }

//     async next(): Promise<HandleModel | null> {
//       const next = await this.handle?.evaluateHandle((h) => h?.nextElementSibling);
//       return next ? new _Handle(next as ElementHandle) : null;
//     }

//     async url(): Promise<string | null> {
//       const text = await this.handle?.evaluate(async (el) => (el as HTMLAnchorElement)?.href);
//       return text ?? null;
//     }

//     async content(): Promise<string | null> {
//       const text = await this.handle?.evaluate(async (el) => el?.innerHTML);
//       return text ?? null;
//     }

//     async src(): Promise<string | null> {
//       const text = await this.handle?.evaluate(async (el) => (el as HTMLImageElement)?.src);
//       return text ?? null;
//     }

//     async value(): Promise<string | null> {
//       const text = await this.handle?.evaluate(async (el) => (el as HTMLInputElement)?.value);
//       return text ?? null;
//     }

//     async select(value: string): Promise<void> {
//       this.handle?.select && (await this.handle?.select(value));
//     }

//     async text(): Promise<string | null> {
//       const text = await this.handle?.evaluate(async (el) => (el as HTMLSpanElement)?.innerText);
//       return text ?? null;
//     }

//     async type(value: string): Promise<void> {
//       this.handle?.click && (await this.handle?.type(value));
//     }
//   }

//   const screen: ScreenModel = {
//     close: async () => {
//       await page.close();
//       await browser.close();
//     },

//     find: findF,

//     findAll: findAllF,

//     key: async (value, { isDelay } = {}): Promise<void> => {
//       await sleep(isDelay ? delay : delayDefault);
//       const input = (() => {
//         switch (value) {
//           case KEY_TYPE.ENTER:
//             return 'Enter';
//           case KEY_TYPE.UP:
//             return 'ArrowUp';
//           case KEY_TYPE.DOWN:
//             return 'ArrowDown';
//           default:
//             throw new InvalidArgumentError();
//         }
//       })();
//       await page.keyboard.press(input);
//     },

//     open: async (route) => {
//       console.warn('@@@goto??');
//       await page.goto(route, { timeout: navigationTimeout, waitUntil: 'domcontentloaded' });
//       console.warn('@@@goto!!');
//       await sleep(delayDefault);
//     },

//     snapshot: async ({ filename } = {}) => {
//       await (page as unknown as Page).$eval('[banneroffsetheight="0"]', (h) => h?.remove());
//       const element = await page.$('#bookingFunnelBody > div').then((h) => h?.boundingBox());
//       const dirname = joinPaths([fromWorking(), snapshotPath]);
//       !existsSync(dirname) && mkdirSync(dirname, { recursive: true });
//       return page.screenshot({
//         clip: {
//           height: element?.height ?? dimension.height,
//           width: element?.width ?? dimension.width,
//           x: 0,
//           y: 0,
//         },
//         path: filename ? joinPaths([dirname, `${filename}.png`]) : undefined,
//       });
//     },

//     uri: () => {
//       const { host, pathname, port } = new URL(page.url());
//       return { host, pathname, port };
//     },
//   };

//   try {
//     await callback(screen);
//   } finally {
//     await browser.close();
//   }
// };
