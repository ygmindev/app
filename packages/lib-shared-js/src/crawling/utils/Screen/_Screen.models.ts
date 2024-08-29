import { type ScreenConfigModel } from '@lib/config/screen/screen.models';
import {
  type HandleModel,
  type KeyTypeModel,
  type SelectorOptionModel,
} from '@lib/shared/crawling/utils/Screen/Screen.models';
import { type UriModel } from '@lib/shared/route/route.models';

export type _ScreenParamsModel = ScreenConfigModel;

export type _ScreenModel = Pick<HandleModel, 'find' | 'findAll'> & {
  close(): Promise<void>;

  initialize(): Promise<void>;

  key(value: KeyTypeModel, options?: SelectorOptionModel): Promise<void>;

  open(url: string): Promise<void>;

  snapshot(params?: { dirname?: string; filename?: string | number }): Promise<Buffer | null>;

  uri(): UriModel | null;
};
