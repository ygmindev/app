import { type PartialModel } from '@lib/shared/core/core.models';
import {
  type _ScreenModel,
  type _ScreenParamsModel,
} from '@lib/shared/crawling/utils/Screen/_Screen.models';
import {
  type KEY_TYPE,
  type SELECTOR_TYPE,
} from '@lib/shared/crawling/utils/Screen/Screen.constants';

export type ScreenParamsModel = PartialModel<_ScreenParamsModel>;

export type ScreenModel = _ScreenModel;

export type HandleModel = {
  content(): Promise<string | null>;
  find(
    selector: SelectorModel,
    options?: SelectorOptionModel & { index?: number },
  ): Promise<HandleModel | null>;
  findAll(selector: SelectorModel, options?: SelectorOptionModel): Promise<Array<HandleModel>>;
  next(): Promise<HandleModel | null>;
  parent(): Promise<HandleModel | null>;
  press(options?: SelectorOptionModel): Promise<void>;
  previous(): Promise<HandleModel | null>;
  select(value: string, options?: SelectorOptionModel): Promise<void>;
  src(): Promise<string | null>;
  text(options?: SelectorOptionModel): Promise<string | null>;
  type(value: string, options?: SelectorOptionModel): Promise<void>;
  url(): Promise<string | null>;
  value(): Promise<string | null>;
};

export type SelectorOptionModel = {
  delay?: boolean | number;
  isThrow?: boolean;
  timeout?: boolean | number;
};

export type SelectorModel = {
  value: string;
} & (
  | { key?: never; type?: SELECTOR_TYPE.ID | SELECTOR_TYPE.TEXT | SELECTOR_TYPE.TEST_ID }
  | { key: string; type?: SELECTOR_TYPE.DATA }
);

export type KeyTypeModel = `${KEY_TYPE}`;

export type SelectorType = `${SELECTOR_TYPE}`;
