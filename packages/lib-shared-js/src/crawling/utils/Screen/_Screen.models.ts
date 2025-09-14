import { type ScreenConfigModel } from '@lib/config/screen/screen.models';
import { type KEY_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import {
  type FindAllOptionDefaultModel,
  type FindOptionDefaultModel,
  type HandleModel,
  type SelectorModel,
  type SelectorOptionModel,
} from '@lib/shared/crawling/utils/Screen/Screen.models';
import { type UriModel } from '@lib/shared/route/route.models';

export type _ScreenParamsModel = ScreenConfigModel;

export type _ScreenModel = {
  dirname?: string;

  close(): Promise<void>;

  find(selector: SelectorModel, options?: FindOptionDefaultModel): Promise<HandleModel | null>;

  findAll(
    selector: SelectorModel,
    options?: FindAllOptionDefaultModel,
  ): Promise<Array<HandleModel>>;

  initialize(): Promise<void>;

  key(value: KEY_TYPE, options?: SelectorOptionModel): Promise<void>;

  open(url: string): Promise<void>;

  record(params?: { dirname?: string; filename?: string | number }): Promise<() => Promise<void>>;

  snapshot(params?: { dirname?: string; filename?: string | number }): Promise<Uint8Array | null>;

  uri(): UriModel | null;
};
