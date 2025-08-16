import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _screen } from '@lib/config/screen/_screen';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import {
  type _ScreenModel,
  type _ScreenParamsModel,
} from '@lib/shared/crawling/utils/Screen/_Screen.models';
import { KEY_TYPE, SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import {
  type FindAllOptionDefaultModel,
  type FindAllOptionModel,
  type FindOptionDefaultModel,
  type FindOptionModel,
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
import trim from 'lodash/trim';
import {
  type Browser,
  type ElementHandle,
  type Frame,
  type Page,
  type ScreenshotOptions,
} from 'puppeteer';
import puppeteer from 'puppeteer-extra';
// import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';

process.env.NODE_ENV === 'production' && (chromium.setGraphicsMode = false);

// puppeteer.use(StealthPlugin());

export class _Screen implements _ScreenModel {
  protected browser!: Browser;
  protected counter: number = 0;
  protected isInitialized?: boolean;
  protected options!: _ScreenParamsModel;
  protected page!: Page;

  constructor(options: _ScreenParamsModel) {
    this.options = options;
  }

  async close(): Promise<void> {
    await this.page.close();
    await this.browser.close();
    this.counter = 0;
  }

  async find(
    selector: SelectorModel,
    { delay = true, retry = true, timeout = true, ...options }: FindOptionDefaultModel = {},
  ): Promise<HandleModel | null> {
    let tries = (retry === true ? this.options.retry : isNumber(retry) ? retry : 0) ?? 0;
    while (tries >= 0) {
      try {
        const result = await find(
          selector,
          {
            ...options,
            delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
            index: options.index === true ? 0 : options.index === false ? -1 : options.index,
            isHeadless: this.options.isHeadless,
            timeout:
              timeout === true ? this.options.elementTimeout : isNumber(timeout) ? timeout : 0,
          },
          this.page,
        );
        if (result) {
          return result;
        }
      } catch (e) {
        if (tries === 0 && options.isThrow) {
          throw e;
        }
      } finally {
        --tries;
      }
    }
    return null;
  }

  async findAll(
    selector: SelectorModel,
    { delay = true, retry = true, timeout = true, ...options }: FindAllOptionDefaultModel = {},
  ): Promise<Array<HandleModel>> {
    let tries = (retry === true ? this.options.retry : isNumber(retry) ? retry : 0) ?? 0;
    while (tries >= 0) {
      try {
        const result = await findAll(
          selector,
          {
            ...options,
            delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
            isHeadless: this.options.isHeadless,
            timeout:
              timeout === true ? this.options.elementTimeout : isNumber(timeout) ? timeout : 0,
          },
          this.page,
        );
        if (result) {
          return result;
        }
      } catch (e) {
        try {
          if (tries === 0 && options.isThrow) {
            throw e;
          }
        } finally {
          --tries;
        }
      }
    }
    return [];
  }

  async initialize(): Promise<void> {
    this.browser = await puppeteer.launch(_screen(this.options));
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
    if (this.uri()?.pathname !== trimPathname(url)) {
      const uriF = this.options.rootUri ? uri({ host: this.options.rootUri, pathname: url }) : url;
      logger.debug(`open page ${uriF}`);
      await this.page.goto(uriF, {
        timeout: this.options.navigationTimeout,
        waitUntil: 'domcontentloaded',
      });
      await this.page
        .createCDPSession()
        .then((client) =>
          client.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: './' }),
        );
    }
  }

  async record({
    dirname,
    filename,
  }: {
    dirname?: string;
    filename?: string | number;
  } = {}): Promise<() => Promise<void>> {
    const { dimension, snapshotPath, videoExtension } = this.options;
    const dirnameF = dirname ?? this.options.dirname;
    const pathname = snapshotPath && joinPaths(filterNil([snapshotPath, dirnameF]));
    pathname && !existsSync(pathname) && mkdirSync(pathname, { recursive: true });
    const recorder = new PuppeteerScreenRecorder(this.page, {
      aspectRatio: '4:3',
      autopad: { color: 'black' },
      followNewTab: true,
      fps: 25,
      videoBitrate: 1000,
      videoCodec: 'libx264',
      videoCrf: 18,
      videoFrame: {
        height: dimension.height ?? 1000,
        width: dimension.width ?? 1000,
      },
      videoPreset: 'ultrafast',
    });
    this.counter += 1;
    await recorder.start(
      joinPaths([pathname, `${this.counter}${filename ? `-${slug(`${filename}`)}` : ''}`], {
        extension: videoExtension,
      }),
    );
    return async () => {
      await recorder.stop();
    };
  }

  async snapshot({
    dirname,
    filename,
  }: {
    dirname?: string;
    filename?: string | number;
  } = {}): Promise<Uint8Array | null> {
    const { delay, dimension, imageExtension, snapshotPath } = this.options;
    await sleep(delay);
    const dirnameF = dirname ?? this.options.dirname;
    const pathname = snapshotPath && joinPaths(filterNil([snapshotPath, dirnameF]));
    pathname && !existsSync(pathname) && mkdirSync(pathname, { recursive: true });
    this.counter += 1;
    return this.page.screenshot({
      clip: {
        height: dimension.height ?? 1000,
        width: dimension.width ?? 1000,
        x: 0,
        y: 0,
      },
      path: snapshotPath
        ? (joinPaths([pathname, `${this.counter}${filename ? `-${slug(`${filename}`)}` : ''}`], {
            extension: imageExtension,
          }) as ScreenshotOptions['path'])
        : undefined,
      type: imageExtension ?? 'webp',
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
    case SELECTOR_TYPE.CLASS:
      return `.${selector.value}`;
    case SELECTOR_TYPE.DATA:
      return `[${selector.key}="${selector.value}"]`;
    case SELECTOR_TYPE.TEST_ID:
      return `[data-testid="${selector.value}"]`;
    case SELECTOR_TYPE.ID:
      return `#${selector.value}`;
    case SELECTOR_TYPE.TEXT:
      return `::-p-text(${selector.value})`;
    case SELECTOR_TYPE.FRAME:
      return `iframe[${selector.key ?? 'name'}="${selector.value}"]`;
    default:
      return selector.value;
  }
};

const find = async (
  selector: SelectorModel,
  { delay = 0, index = -1, isHeadless, isThrow = true, timeout = 0 }: FindOptionModel = {},
  handle?: ElementHandle | Frame | Page,
): Promise<HandleModel | null> => {
  if (handle) {
    delay && (await sleep(delay));
    const selectorF = getSelector(selector);
    try {
      logger.debug(`finding ${stringify(selector, { isMinify: true })} with ${selectorF}...`);
      timeout && (await handle.waitForSelector(selectorF, { timeout, visible: true }));
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
      selector.type === SELECTOR_TYPE.FRAME &&
        (selected = (await selected.contentFrame()) as unknown as ElementHandle<Element>);
      logger.debug(`found ${stringify(selector, { isMinify: true })}!`);
      return new _Handle(selected, { delay, timeout });
    }
  }
  isThrow && new NotFoundError(stringify(selector));
  return null;
};

const findAll = async (
  selector: SelectorModel,
  { delay, isHeadless, isThrow = true, timeout }: FindAllOptionModel = {},
  handle?: ElementHandle | Frame | Page,
): Promise<Array<HandleModel>> => {
  if (handle) {
    delay && (await sleep(delay));
    const selectorF = getSelector(selector);
    try {
      logger.debug(`finding all ${stringify(selector, { isMinify: true })} with ${selectorF}...`);
      timeout && (await handle.waitForSelector(selectorF, { timeout, visible: true }));
    } catch (e) {
      if (isThrow) {
        throw e;
      }
      logger.warn(e);
    }
    const selected = await handle.$$(selectorF);
    if (selected) {
      logger.debug(`found all ${stringify(selector, { isMinify: true })}!`);
      return mapSequence(
        selected.map((v) => async () => {
          let vF = v;
          vF &&
            selector.type === SELECTOR_TYPE.FRAME &&
            (vF = (await vF.contentFrame()) as unknown as ElementHandle<Element>);
          return vF && new _Handle(vF, { delay, timeout });
        }),
      );
    }
  }
  isThrow && new NotFoundError(stringify(selector, { isMinify: true }));
  return [];
};

class _Handle implements HandleModel {
  protected handle: ElementHandle<Element>;

  protected options!: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
    delay?: number;
    retry?: number;
    timeout?: number;
  };

  constructor(
    handle: ElementHandle,
    options: Omit<SelectorOptionModel, 'isDelay' | 'timeout'> & {
      delay?: number;
      retry?: number;
      timeout?: number;
    },
  ) {
    this.handle = handle;
    this.options = options;
  }

  async content(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => el?.innerHTML);
    return text ?? null;
  }

  async find(
    selector: SelectorModel,
    {
      delay = true,
      retry = true,
      timeout = true,
      ...options
    }: SelectorOptionModel & { retry?: boolean | number } = {},
  ): Promise<HandleModel | null> {
    let tries = (retry === true ? this.options.retry : isNumber(retry) ? retry : 0) ?? 0;
    while (tries >= 0) {
      try {
        const result = await find(
          selector,
          {
            ...options,
            delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
            timeout: timeout === true ? this.options.timeout : isNumber(timeout) ? timeout : 0,
          },
          this.handle,
        );
        if (result) {
          return result;
        }
      } catch (e) {
        if (tries === 0 && options.isThrow) {
          throw e;
        }
      } finally {
        --tries;
      }
    }
    return null;
  }

  async findAll(
    selector: SelectorModel,
    {
      delay = true,
      retry = true,
      timeout = true,
      ...options
    }: SelectorOptionModel & { retry?: boolean | number } = {},
  ): Promise<Array<HandleModel>> {
    let tries = (retry === true ? this.options.retry : isNumber(retry) ? retry : 0) ?? 0;
    while (tries >= 0) {
      try {
        const result = await findAll(
          selector,
          {
            ...options,
            delay: delay === true ? this.options.delay : isNumber(delay) ? delay : 0,
            timeout: timeout === true ? this.options.timeout : isNumber(timeout) ? timeout : 0,
          },
          this.handle,
        );
        if (result) {
          return result;
        }
      } catch (e) {
        if (tries === 0 && options.isThrow) {
          throw e;
        }
      } finally {
        --tries;
      }
    }
    return [];
  }

  async next(): Promise<HandleModel | null> {
    const next = await this.handle.evaluateHandle((h) => h?.nextElementSibling);
    return next ? new _Handle(next as ElementHandle, this.options) : null;
  }

  async parent(): Promise<HandleModel | null> {
    const parent = await this.handle.evaluateHandle((h) => h?.parentNode);
    return parent ? new _Handle(parent as ElementHandle, this.options) : null;
  }

  async press(): Promise<void> {
    await this.handle.click();
  }

  async previous(): Promise<HandleModel | null> {
    const previous = await this.handle.evaluateHandle((h) => h?.previousElementSibling);
    return previous ? new _Handle(previous as ElementHandle, this.options) : null;
  }

  async select(value: string): Promise<void> {
    this.handle.select && (await this.handle.select(value));
  }

  async src(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => (el as HTMLImageElement)?.src);
    return text ?? null;
  }

  async text(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => (el as HTMLSpanElement)?.innerText);
    return text ? trim(text.replaceAll('\n', ' ')) : null;
  }

  async type(value: string): Promise<void> {
    await this.handle.type(value);
  }

  async url(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => (el as HTMLAnchorElement)?.href);
    return text ?? null;
  }

  async value(): Promise<string | null> {
    const text = await this.handle.evaluate(async (el) => (el as HTMLInputElement)?.value);
    return text ?? null;
  }
}
