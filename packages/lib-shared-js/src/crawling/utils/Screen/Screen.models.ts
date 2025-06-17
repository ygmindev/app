import { type OverrideModel, type PartialModel } from '@lib/shared/core/core.models';
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
  find(selector: SelectorModel, options?: FindOptionModel): Promise<HandleModel | null>;
  findAll(selector: SelectorModel, options?: FindAllOptionModel): Promise<Array<HandleModel>>;
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

export type FindOptionDefaultModel = SelectorOptionModel & {
  index?: boolean | number;
  isFrame?: boolean;
  retry?: boolean | number;
};

export type FindAllOptionDefaultModel = SelectorOptionModel & {
  isFrame?: boolean;
  retry?: boolean | number;
};

export type FindOptionModel = OverrideModel<
  FindOptionDefaultModel,
  {
    delay?: number;
    index?: number;
    retry?: number;
    timeout?: number;
  }
>;

export type FindAllOptionModel = OverrideModel<
  FindAllOptionDefaultModel,
  {
    delay?: number;
    retry?: number;
    timeout?: number;
  }
>;

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
