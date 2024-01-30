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
import { type ElementHandle, launch } from 'puppeteer';

export const _withScreen = async (
  ...[callback, { delay, delayDefault, dimension, isHeadless, timeout }]: _WithScreenParamsModel
): Promise<_WithScreenModel> => {
  let isOpen: boolean;

  const browser = await launch({
    args: dimension ? [`--window-size-${dimension.width},${dimension.height}`] : undefined,
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
      isOpen && (await page.waitForNavigation({ timeout, waitUntil: 'networkidle0' }));
      await page.goto(route, { timeout, waitUntil: 'networkidle0' });
      isOpen = true;
    },

    snapshot: async () => {
      await sleep(delay);
      return page.screenshot();
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

// import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
// import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
// import { sleep } from '@lib/shared/core/utils/sleep/sleep';
// import { stringify } from '@lib/shared/core/utils/stringify/stringify';
// import {
//   type _WithScreenModel,
//   type _WithScreenParamsModel,
// } from '@lib/shared/crawling/utils/withScreen/_withScreen.models';
// import { KEY_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
// import {
//   type FindOptionModel,
//   type ScreenModel,
// } from '@lib/shared/crawling/utils/withScreen/withScreen.models';
// import { type ElementHandle, launch } from 'puppeteer';

// export const _withScreen = async (
//   ...[callback, { delay, dimension, isHeadless, timeout }]: _WithScreenParamsModel
// ): Promise<_WithScreenModel> => {
//   let isOpen: boolean;

//   const browser = await launch({
//     args: dimension ? [`--window-size-${dimension.width},${dimension.height}`] : undefined,
//     headless: isHeadless ? 'new' : false,
//     ignoreDefaultArgs: ['--hide-scrollbars'],
//     ignoreHTTPSErrors: true,
//   });

//   const page = await browser.newPage();

//   const selectByText = async <TType extends Element>({
//     handles,
//     isMultiple,
//     value,
//   }: {
//     handles?: Array<ElementHandle<TType>>;
//     isMultiple?: boolean;
//     value: string;
//   }): Promise<Array<ElementHandle<TType>>> => {
//     const handlesF = handles ?? ((await page.$$('body > *')) as Array<ElementHandle<TType>>);
//     let result: Array<ElementHandle<TType>> = [];
//     for (const handle of handlesF) {
//       const childrenCount = await handle.evaluate(async (el) => el.childElementCount);
//       if (childrenCount > 1) {
//         const childHandles = await handle.$$('*');
//         if (childHandles?.length) {
//           const children = await selectByText({ handles: childHandles, isMultiple: true, value });
//           if (children?.length) {
//             result = [...result, ...(children as Array<ElementHandle<TType>>)];
//             if (!isMultiple) {
//               break;
//             }
//           }
//         }
//       } else {
//         const innerText = await handle.evaluate((e) => (e as unknown as HTMLSpanElement).innerText);
//         if (innerText?.trim() === value) {
//           result.push(handle);
//           if (!isMultiple) {
//             break;
//           }
//         }
//       }
//     }
//     return result;
//   };

//   const select = async <TType extends Element>({
//     conditions,
//     handles,
//     isMultiple,
//     target,
//   }: {
//     conditions?: Array<SelectorPathModel>;
//     handles?: Array<ElementHandle<TType>>;
//     isMultiple?: boolean;
//     target: SelectorPathModel;
//   }): Promise<Array<ElementHandle<TType>>> => {
//     const handlesF = handles ?? ((await page.$$('body *')) as Array<ElementHandle<TType>>);
//     let result: Array<ElementHandle<TType>> = [];
//     for (const handle of handlesF) {
//       if (target.type === SELECTOR_TYPE.TEXT) {
//         result = [
//           ...result,
//           ...(await selectByText({ handles: [handle], isMultiple: true, value: target.value })),
//         ];
//       } else {
//         const selector = await (async () => {
//           switch (target.type) {
//             case SELECTOR_TYPE.DATA:
//               return `[${target.key}="${target.value}"]`;
//             case SELECTOR_TYPE.ID:
//               return `#${target.value}`;
//             default:
//               return target.value;
//           }
//         })();
//         if (isMultiple) {
//           const selected = await handle.$$(selector);
//           selected?.length && (result = [...result, ...(selected as Array<ElementHandle<TType>>)]);
//         } else {
//           const selected = await handle.$(selector);
//           selected && result.push(selected as ElementHandle<TType>);
//           break;
//         }
//       }
//     }

//     if (conditions?.length) {
//       const [condition, ...conditionsF] = conditions;
//       const resultF: Array<ElementHandle<TType>> = [];
//       for (const handle of result) {
//         const selected = await select({
//           conditions: conditionsF,
//           handles: [handle],
//           target: condition,
//         });
//         if (selected) {
//           resultF.push(handle);
//           if (!isMultiple) {
//             break;
//           }
//         }
//       }
//       return resultF;
//     }

//     return result;
//   };

//   const getSelector = (path: SelectorPathModel) => {
//     switch (path.type) {
//       case SELECTOR_TYPE.DATA:
//         return `[${path.key}="${path.value}"]`;
//       case SELECTOR_TYPE.ID:
//         return `#${path.value}`;
//       default:
//         return path.value;
//     }
//   };

//   const find = async (
//     path: SelectorPathModel,
//     { isDelay }: FindOptionModel = {},
//     handle?: ElementHandle,
//   ): Promise<ScreenElement | null> => {
//     await sleep(isDelay ? delay : delayDefault);
//     const selector = getSelector(path);
//     const selected = await (handle ?? page).$(selector);
//     return selected
//       ? {
//           find: async (pathF, optionsF) => find(pathF, optionsF, selected),
//           press: async () => (selected.click ? selected.click() : undefined),
//           text: async () => selected.evaluate((el) => (el as HTMLSpanElement).innerText ?? ''),
//           type: async (value) => (selected.type ? selected.type(value) : undefined),
//         }
//       : null;
//   };

//   const screen: ScreenModel = {
//     close: async () => {
//       isOpen = false;
//       await browser.close();
//     },

//     find: async (path, options) => find(path, options),

//     getValue: async ({ conditions, index = 0, isDelay, parent, target }): Promise<string> => {
//       await sleep(isDelay ? delay : delayDefault);
//       const element = await select<HTMLSpanElement>({
//         conditions,
//         handles: parent ? await select({ isMultiple: true, target: parent }) : undefined,
//         isMultiple: index > 0,
//         target,
//       });
//       const elementF = element?.[index];
//       if (elementF) {
//         return elementF.evaluate(async (el) => el.innerHTML);
//       } else {
//         throw new NotFoundError(stringify({ conditions, target }));
//       }
//     },

//     goto: async (route) => {
//       isOpen && (await page.waitForNavigation({ timeout, waitUntil: 'networkidle0' }));
//       await page.goto(route, { timeout, waitUntil: 'networkidle0' });
//       isOpen = true;
//     },

//     key: async ({ isDelay, value }) => {
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

//     press: async ({ conditions, index = 0, isDelay, parent, target }) => {
//       await sleep(isDelay ? delay : delayDefault);
//       const element = await select<HTMLButtonElement>({
//         conditions,
//         handles: parent ? await select({ isMultiple: true, target: parent }) : undefined,
//         isMultiple: index > 0,
//         target,
//       });
//       const elementF = element?.[index];
//       if (elementF) {
//         await elementF.click();
//       } else {
//         throw new NotFoundError(stringify({ conditions, target }));
//       }
//     },

//     snapshot: async () => {
//       await sleep(delay);
//       return page.screenshot();
//     },

//     type: async ({ conditions, index = 0, isDelay, parent, target, value }) => {
//       await sleep(isDelay ? delay : delayDefault);
//       const element = await select<HTMLInputElement>({
//         conditions,
//         handles: parent ? await select({ isMultiple: true, target: parent }) : undefined,
//         isMultiple: index > 0,
//         target,
//       });
//       const elementF = element?.[index];
//       if (elementF) {
//         await elementF.type(value);
//       } else {
//         throw new NotFoundError(stringify({ conditions, target }));
//       }
//     },

//     uri: () => {
//       const { host, pathname, port } = new URL(page.url());
//       return { host, pathname, port };
//     },

//     waitFor: async ({ conditions, target }) => {
//       const element = (await select<HTMLButtonElement>({ conditions, target }))?.[0];
//       if (!element) {
//         throw new NotFoundError(stringify({ conditions, target }));
//       }
//     },

//     waitForText: async (value) => {
//       await page.waitForSelector(`div ::-p-text(${value})`);
//     },
//   };

//   try {
//     await callback(screen);
//   } finally {
//     await browser.close();
//   }
// };

// export class _Handle implements _HandleModel {
//   async find(
//     path: SelectorPathModel,
//     { isDelay }: FindOptionModel = {},
//   ): Promise<HandleModel | null> {}

//   async press(): Promise<void> {
//     throw new Error('Method not implemented.');
//   }

//   async text(): Promise<string> {
//     throw new Error('Method not implemented.');
//   }

//   async type(value: string): Promise<void> {
//     throw new Error('Method not implemented.');
//   }
// }
