import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _screen } from '@lib/config/screen/_screen';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { uid } from '@lib/shared/core/utils/uid/uid';
import {
  type _ScreenModel,
  type _ScreenParamsModel,
} from '@lib/shared/crawling/utils/Screen/_Screen.models';
import { KEY_TYPE, SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import {
  type HandleModel,
  type KeyTypeModel,
  type SelectorModel,
  type SelectorOptionModel,
} from '@lib/shared/crawling/utils/Screen/Screen.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { type UriModel } from '@lib/shared/route/route.models';
import chromium from '@sparticuz/chromium';
import { existsSync, mkdirSync } from 'fs';
import isNumber from 'lodash/isNumber';
import { type Browser, type ElementHandle, type Page } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

export class _Screen implements _ScreenModel {
  protected options!: _ScreenParamsModel;

  protected browser!: Browser;

  protected page!: Page;

  protected isInitialized?: boolean;

  constructor(options: _ScreenParamsModel) {
    this.options = options;
  }

  async initialize(): Promise<void> {
    this.browser = await puppeteer.launch({
      ..._screen(this.options),
      executablePath:
        process.env.NODE_ENV === 'production' ? await chromium.executablePath() : undefined,
    });

    this.isInitialized = true;

    this.page = await this.browser.newPage();
    await this.page.setCacheEnabled(false);
    await this.page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    );
    await this.page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });
    await this.page.setRequestInterception(true);
    await this.page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => false,
      });
    });

    this.page.on('request', (req) => {
      const type = req.resourceType();
      if (this.options.isIgnoreMedia && (type === 'image' || type === 'font' || type === 'media')) {
        void req.abort();
      } else {
        const headers = req.headers();
        void req.continue(headers);
      }
    });
  }

  find(
    selector: SelectorModel,
    {
      delay = true,
      timeout = true,
      ...options
    }: SelectorOptionModel & { index?: number | undefined } = {},
  ): Promise<HandleModel | null> {
    return find(
      selector,
      {
        ...options,
        delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
        timeout: timeout === true ? this.options.elementTimeout : isNumber(timeout) ? timeout : 0,
      },
      this.page,
    );
  }

  findAll(
    selector: SelectorModel,
    { delay = true, timeout = true, ...options }: SelectorOptionModel = {},
  ): Promise<HandleModel[]> {
    return findAll(
      selector,
      {
        ...options,
        delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
        timeout: timeout === true ? this.options.elementTimeout : isNumber(timeout) ? timeout : 0,
      },
      this.page,
    );
  }

  async close(): Promise<void> {
    await this.page.close();
    await this.browser.close();
  }

  async key(value: KeyTypeModel, { delay = true }: SelectorOptionModel = {}): Promise<void> {
    // delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
    // timeout: timeout === true ? this.options.elementTimeout : isNumber(timeout) ? timeout : 0,
    await sleep(delay === true ? this.options.delay : isNumber(delay) ? delay : 0);
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
    await this.page.keyboard.press(input);
  }

  async open(url: string): Promise<void> {
    !this.isInitialized && (await this.initialize());
    const uriF = this.options.rootUri ? uri({ host: this.options.rootUri, pathname: url }) : url;
    await this.page.goto(uriF, {
      timeout: this.options.navigationTimeout,
      waitUntil: 'networkidle0',
    });
    await this.page
      .createCDPSession()
      .then((client) =>
        client.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: './' }),
      );
  }

  async snapshot({
    dirname,
    filename,
  }: {
    dirname?: string;
    filename?: string | number;
  }): Promise<Uint8Array | null> {
    const { snapshotPath } = this.options;
    const pathname = snapshotPath && joinPaths(filterNil([snapshotPath, dirname]));
    pathname && !existsSync(pathname) && mkdirSync(pathname, { recursive: true });
    return this.page.screenshot({
      clip: {
        height: this.options.dimension.height ?? 1000,
        width: this.options.dimension.width ?? 1000,
        x: 0,
        y: 0,
      },
      path: snapshotPath ? joinPaths([pathname, `${filename ?? uid()}.png`]) : undefined,
    });
  }

  uri(): UriModel | null {
    if (this.page) {
      const { host, pathname, port, protocol } = new URL(this.page.url());
      return { host: `${protocol}//${host}`, pathname, port };
    }
    return null;
  }
}

const getSelector = (selector: SelectorModel): string => {
  switch (selector.type) {
    case SELECTOR_TYPE.DATA:
      return `[${selector.key}="${selector.value}"]`;
    case SELECTOR_TYPE.TEST_ID:
      return `[data-testid="${selector.value}"]`;
    case SELECTOR_TYPE.ID:
      return `#${selector.value}`;
    case SELECTOR_TYPE.TEXT:
      return `::-p-text(${selector.value})`;
    default:
      return selector.value;
  }
};

const find = async (
  selector: SelectorModel,
  {
    delay = 0,
    index = -1,
    isThrow = false,
    timeout = 0,
  }: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
    delay?: number;
    index?: number;
    timeout?: number;
  } = {},
  handle?: ElementHandle | Page,
): Promise<HandleModel | null> => {
  if (handle) {
    delay && (await sleep(delay));
    const selectorF = getSelector(selector);
    try {
      logger.info(`Finding ${stringify(selector)}...`);
      timeout && (await handle.waitForSelector(selectorF, { timeout }));
    } catch (e) {
      if (isThrow) {
        throw e;
      }
      logger.warn(e);
    }
    let selected: ElementHandle;
    if (index >= 0) {
      selected = (await handle.$$(selectorF))?.[index];
    } else {
      selected = (await handle.$(selectorF)) as ElementHandle;
    }
    if (selected) {
      logger.info(`Found ${stringify(selector)}!`);
      return new _Handle(selected, { delay, timeout });
    }
  }
  isThrow && new NotFoundError(stringify(selector));
  return null;
};

const findAll = async (
  selector: SelectorModel,
  {
    delay,
    isThrow = false,
    timeout,
  }: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
    delay?: number;
    index?: number;
    timeout?: number;
  } = {},
  handle?: ElementHandle | Page,
): Promise<Array<HandleModel>> => {
  if (handle) {
    delay && (await sleep(delay));
    const selectorF = getSelector(selector);
    try {
      logger.info(`Finding all ${stringify(selector)}...`);
      timeout &&
        (await handle.waitForSelector(selectorF, {
          timeout,
        }));
    } catch (e) {
      if (isThrow) {
        throw e;
      }
      logger.warn(e);
    }
    const selected = await handle.$$(selectorF);
    if (selected) {
      logger.info(`Found all ${stringify(selector)}!`);
      return selected?.map((v) => v && new _Handle(v, { delay, timeout }));
    }
  }
  isThrow && new NotFoundError(stringify(selector));
  return [];
};

class _Handle implements HandleModel {
  protected handle: ElementHandle<Element>;

  protected options!: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
    delay?: number;
    timeout?: number;
  };

  constructor(
    handle: ElementHandle,
    options: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
      delay?: number;
      timeout?: number;
    },
  ) {
    this.handle = handle;
    this.options = options;
  }

  async find(
    selector: SelectorModel,
    { delay = true, timeout = true, ...options }: SelectorOptionModel = {},
  ): Promise<HandleModel | null> {
    return find(
      selector,
      {
        ...options,
        delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
        timeout: timeout === true ? this.options.timeout : isNumber(timeout) ? timeout : 0,
      },
      this.handle,
    );
  }

  async findAll(
    selector: SelectorModel,
    { delay = true, timeout = true, ...options }: SelectorOptionModel = {},
  ): Promise<Array<HandleModel>> {
    return findAll(
      selector,
      {
        ...options,
        delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
        timeout: timeout === true ? this.options.timeout : isNumber(timeout) ? timeout : 0,
      },
      this.handle,
    );
  }

  async press(): Promise<void> {
    await this.handle.click();
  }

  async parent(): Promise<HandleModel | null> {
    const parent = await this.handle.evaluateHandle((h) => h?.parentNode);
    return parent ? new _Handle(parent as ElementHandle, this.options) : null;
  }

  async previous(): Promise<HandleModel | null> {
    const previous = await this.handle.evaluateHandle((h) => h?.previousElementSibling);
    return previous ? new _Handle(previous as ElementHandle, this.options) : null;
  }

  async next(): Promise<HandleModel | null> {
    const next = await this.handle.evaluateHandle((h) => h?.nextElementSibling);
    return next ? new _Handle(next as ElementHandle, this.options) : null;
  }

  async url(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => (el as HTMLAnchorElement)?.href);
    return text ?? null;
  }

  async content(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => el?.innerHTML);
    return text ?? null;
  }

  async src(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => (el as HTMLImageElement)?.src);
    return text ?? null;
  }

  async value(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => (el as HTMLInputElement)?.value);
    return text ?? null;
  }

  async select(value: string): Promise<void> {
    this.handle.select && (await this.handle.select(value));
  }

  async text(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => (el as HTMLSpanElement)?.innerText);
    return text ?? null;
  }

  async type(value: string): Promise<void> {
    await this.handle.type(value);
  }
}

// import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
// import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
// import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
// import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
// import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
// import { sleep } from '@lib/shared/core/utils/sleep/sleep';
// import { stringify } from '@lib/shared/core/utils/stringify/stringify';
// import {
//   type _ScreenModel,
//   type _ScreenParamsModel,
// } from '@lib/shared/crawling/utils/Screen/_Screen.models';
// import { KEY_TYPE, SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
// import {
//   type HandleModel,
//   type KeyTypeModel,
//   type SelectorModel,
//   type SelectorOptionModel,
// } from '@lib/shared/crawling/utils/Screen/Screen.models';
// import { info } from '@lib/shared/logging/utils/logger/logger';
// import { type UriModel } from '@lib/shared/route/route.models';
// import chromium from '@sparticuz/chromium';
// import { existsSync, mkdirSync } from 'fs';
// import isNumber from 'lodash/isNumber';
// import { type Browser, type ElementHandle, type Page } from 'puppeteer';
// import puppeteer from 'puppeteer-extra';
// import StealthPlugin from 'puppeteer-extra-plugin-stealth';

// puppeteer.use(StealthPlugin());

// chromium.setHeadlessMode = true;

// chromium.setGraphicsMode = false;

// export class _Screen implements _ScreenModel {
//   protected options!: _ScreenParamsModel;

//   protected browser!: Browser;

//   protected page!: Page;

//   constructor(options: _ScreenParamsModel) {
//     this.options = options;
//   }

//   async initialize(): Promise<void> {
//     const proxy =
//       !!this.options.proxies?.length &&
//       this.options.proxies[Math.floor(Math.random() * this.options.proxies.length)];

//     this.browser = await puppeteer.launch({
//       args: filterNil([
//         ...(process.env.NODE_ENV === 'production' ? chromium.args : []),
//         proxy && `--proxy-server=${proxy.url}`,
//         '--disable-dev-shm-usage',
//         '--disable-features=NetworkServiceInProcess2',
//         '--disable-features=site-per-process',
//         '--disable-gpu',
//         '--disable-setuid-sandbox',
//         '--disable-web-security',
//         '--ignore-certificate-errors',
//         '--no-first-run',
//         '--no-sandbox',
//         '--no-zygote',
//       ])
//         .filter((v) => !v.includes('--use-gl'))
//         .filter(Boolean),
//       defaultViewport: chromium.defaultViewport,
//       executablePath:
//         process.env.NODE_ENV === 'production' ? await chromium.executablePath() : undefined,
//       headless: process.env.NODE_ENV === 'production' ? chromium.headless : this.options.isHeadless,
//       ignoreHTTPSErrors: true,
//       protocolTimeout: 0,
//     });

//     this.page = await this.browser.newPage();

//     proxy && (await this.page.authenticate({ password: proxy.password, username: proxy.username }));

//     await this.page.setCacheEnabled(false);
//     await this.page.setUserAgent(
//       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
//     );
//     await this.page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });
//     await this.page.setRequestInterception(true);
//     this.page.on('request', (req) => {
//       const type = req.resourceType();
//       if (this.options.isIgnoreMedia && (type === 'image' || type === 'font' || type === 'media')) {
//         void req.abort();
//       } else {
//         const headers = req.headers();
//         void req.continue(headers);
//       }
//     });
//   }

//   find(
//     selector: SelectorModel,
//     {
//       delay = true,
//       timeout = true,
//       ...options
//     }: SelectorOptionModel & { index?: number | undefined } = {},
//   ): Promise<HandleModel | null> {
//     return find(
//       selector,
//       {
//         ...options,
//         delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
//         timeout: timeout === true ? this.options.elementTimeout : isNumber(timeout) ? timeout : 0,
//       },
//       this.page,
//     );
//   }

//   findAll(
//     selector: SelectorModel,
//     { delay = true, timeout = true, ...options }: SelectorOptionModel = {},
//   ): Promise<HandleModel[]> {
//     return findAll(
//       selector,
//       {
//         ...options,
//         delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
//         timeout: timeout === true ? this.options.elementTimeout : isNumber(timeout) ? timeout : 0,
//       },
//       this.page,
//     );
//   }

//   async close(): Promise<void> {
//     await this.page.close();
//     await this.browser.close();
//   }

//   async key(value: KeyTypeModel, { delay = true }: SelectorOptionModel = {}): Promise<void> {
//     // delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
//     // timeout: timeout === true ? this.options.elementTimeout : isNumber(timeout) ? timeout : 0,
//     await sleep(delay === true ? this.options.delay : isNumber(delay) ? delay : 0);
//     const input = (() => {
//       switch (value) {
//         case KEY_TYPE.ENTER:
//           return 'Enter';
//         case KEY_TYPE.UP:
//           return 'ArrowUp';
//         case KEY_TYPE.DOWN:
//           return 'ArrowDown';
//         default:
//           throw new InvalidArgumentError();
//       }
//     })();
//     await this.page.keyboard.press(input);
//   }

//   async open(uri: string): Promise<void> {
//     console.warn(`@@@ open: ${uri}`);
//     await this.page.goto(uri, {
//       timeout: this.options.navigationTimeout,
//       waitUntil: 'domcontentloaded',
//     });
//     await this.page.waitForNetworkIdle({ timeout: this.options.navigationTimeout });
//   }

//   async snapshot({ filename }: { filename: string }): Promise<Buffer | null> {
//     const dirname = this.options.snapshotPath
//       ? joinPaths([fromWorking(), this.options.snapshotPath])
//       : undefined;
//     dirname && !existsSync(dirname) && mkdirSync(dirname, { recursive: true });
//     return this.page.screenshot({
//       clip: {
//         height: this.options.dimension.height ?? 1000,
//         width: this.options.dimension.width ?? 1000,
//         x: 0,
//         y: 0,
//       },
//       path: dirname ? joinPaths([dirname, `${filename}.png`]) : undefined,
//     });
//   }

//   uri(): UriModel | null {
//     if (this.page) {
//       const { host, pathname, port } = new URL(this.page.url());
//       return { host, pathname, port };
//     }
//     return null;
//   }
// }

// const getSelector = (selector: SelectorModel): string => {
//   switch (selector.type) {
//     case SELECTOR_TYPE.DATA:
//       return `[${selector.key}="${selector.value}"]`;
//     case SELECTOR_TYPE.ID:
//       return `#${selector.value}`;
//     case SELECTOR_TYPE.TEXT:
//       return `::-p-text(${selector.value})`;
//     default:
//       return selector.value;
//   }
// };

// const find = async (
//   selector: SelectorModel,
//   {
//     delay = 0,
//     index = -1,
//     isThrow = false,
//     timeout = 0,
//   }: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
//     delay?: number;
//     index?: number;
//     timeout?: number;
//   } = {},
//   handle?: ElementHandle | Page,
// ): Promise<HandleModel | null> => {
//   if (handle) {
//     delay && (await sleep(delay));
//     const selectorF = getSelector(selector);
//     try {
//       logger.info(`Finding ${stringify(selector)} ${timeout}...`);
//       timeout && (await handle.waitForSelector(selectorF, { timeout }));
//     } catch (e) {
//       console.warn(e);
//     }
//     let selected: ElementHandle;
//     if (index >= 0) {
//       selected = (await handle.$$(selectorF))?.[index];
//     } else {
//       selected = (await handle.$(selectorF)) as ElementHandle;
//     }
//     if (selected) {
//       logger.info(`Found ${stringify(selector)}!`);
//       return new _Handle(selected, { delay, timeout });
//     }
//   }
//   isThrow && new NotFoundError(stringify(selector));
//   return null;
// };

// const findAll = async (
//   selector: SelectorModel,
//   {
//     delay,
//     isThrow = false,
//     timeout,
//   }: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
//     delay?: number;
//     index?: number;
//     timeout?: number;
//   } = {},
//   handle?: ElementHandle | Page,
// ): Promise<Array<HandleModel>> => {
//   if (handle) {
//     delay && (await sleep(delay));
//     const selectorF = getSelector(selector);
//     try {
//       logger.info(`Finding all ${stringify(selector)}...`);
//       timeout &&
//         (await handle.waitForSelector(selectorF, {
//           timeout,
//         }));
//     } catch (e) {}
//     const selected = await handle.$$(selectorF);
//     if (selected) {
//       logger.info(`Found all ${stringify(selector)}!`);
//       return selected?.map((v) => v && new _Handle(v, { delay, timeout }));
//     }
//   }
//   isThrow && new NotFoundError(stringify(selector));
//   return [];
// };

// class _Handle implements HandleModel {
//   protected handle: ElementHandle<Element>;

//   protected options!: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
//     delay?: number;
//     timeout?: number;
//   };

//   constructor(
//     handle: ElementHandle,
//     options: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
//       delay?: number;
//       timeout?: number;
//     },
//   ) {
//     this.handle = handle;
//     this.options = options;
//   }

//   async find(
//     selector: SelectorModel,
//     { delay = true, timeout = true, ...options }: SelectorOptionModel = {},
//   ): Promise<HandleModel | null> {
//     return find(
//       selector,
//       {
//         ...options,
//         delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
//         timeout: timeout === true ? this.options.timeout : isNumber(timeout) ? timeout : 0,
//       },
//       this.handle,
//     );
//   }

//   async findAll(
//     selector: SelectorModel,
//     { delay = true, timeout = true, ...options }: SelectorOptionModel = {},
//   ): Promise<Array<HandleModel>> {
//     return findAll(
//       selector,
//       {
//         ...options,
//         delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
//         timeout: timeout === true ? this.options.timeout : isNumber(timeout) ? timeout : 0,
//       },
//       this.handle,
//     );
//   }

//   async press(): Promise<void> {
//     await this.handle.click();
//   }

//   async parent(): Promise<HandleModel | null> {
//     const parent = await this.handle.evaluateHandle((h) => h?.parentNode);
//     return parent ? new _Handle(parent as ElementHandle, this.options) : null;
//   }

//   async previous(): Promise<HandleModel | null> {
//     const previous = await this.handle.evaluateHandle((h) => h?.previousElementSibling);
//     return previous ? new _Handle(previous as ElementHandle, this.options) : null;
//   }

//   async next(): Promise<HandleModel | null> {
//     const next = await this.handle.evaluateHandle((h) => h?.nextElementSibling);
//     return next ? new _Handle(next as ElementHandle, this.options) : null;
//   }

//   async url(): Promise<string | null> {
//     const text = await this.handle.evaluate(async (el) => (el as HTMLAnchorElement)?.href);
//     return text ?? null;
//   }

//   async content(): Promise<string | null> {
//     const text = await this.handle.evaluate(async (el) => el?.innerHTML);
//     return text ?? null;
//   }

//   async src(): Promise<string | null> {
//     const text = await this.handle.evaluate(async (el) => (el as HTMLImageElement)?.src);
//     return text ?? null;
//   }

//   async value(): Promise<string | null> {
//     const text = await this.handle.evaluate(async (el) => (el as HTMLInputElement)?.value);
//     return text ?? null;
//   }

//   async select(value: string): Promise<void> {
//     this.handle.select && (await this.handle.select(value));
//   }

//   async text(): Promise<string | null> {
//     const text = await this.handle.evaluate(async (el) => (el as HTMLSpanElement)?.innerText);
//     return text ?? null;
//   }

//   async type(value: string): Promise<void> {
//     await this.handle.type(value);
//   }
// }
