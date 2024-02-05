import {
  type _WithScreenModel,
  type _WithScreenParamsModel,
} from '@lib/shared/crawling/utils/withScreen/_withScreen.models';
import {
  type KEY_TYPE,
  type SELECTOR_TYPE,
} from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { type UriModel } from '@lib/shared/route/route.models';

export type WithScreenParamsModel = _WithScreenParamsModel[0];

export type WithScreenModel = _WithScreenModel;

export type ScreenModel = Pick<HandleModel, 'find' | 'findAll'> & {
  close(): Promise<void>;

  key(value: KeyTypeModel, options?: SelectorOptionModel): Promise<void>;

  open(uri: string): Promise<void>;

  snapshot(params?: { filename?: string }): Promise<Buffer | null>;

  uri(): UriModel;
};

export type HandleModel = {
  content(): Promise<string | null>;
  find(
    selector: SelectorModel,
    options?: SelectorOptionModel & { index?: number },
  ): Promise<HandleModel | null>;
  findAll(selector: SelectorModel, options?: SelectorOptionModel): Promise<Array<HandleModel>>;
  has(selector: SelectorModel): Promise<HandleModel | null>;
  next(): Promise<HandleModel | null>;
  press(options?: SelectorOptionModel): Promise<void>;
  previous(): Promise<HandleModel | null>;
  select(value: string, options?: SelectorOptionModel): Promise<void>;
  src(): Promise<string | null>;
  text(options?: SelectorOptionModel): Promise<string | null>;
  type(value: string, options?: SelectorOptionModel): Promise<void>;
  url(): Promise<string | null>;
  value(): Promise<string | null>;
};

export type SelectorOptionModel = { isDelay?: boolean; isThrow?: boolean; isWait?: boolean };

export type SelectorModel = {
  value: string;
} & (
  | { key?: never; type?: SELECTOR_TYPE.ID | SELECTOR_TYPE.TEXT }
  | { key: string; type?: SELECTOR_TYPE.DATA }
);

export type KeyTypeModel = `${KEY_TYPE}`;

export type SelectorType = `${SELECTOR_TYPE}`;
