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

  open(uri: string): Promise<void>;

  snapshot(params?: { filename?: string }): Promise<Buffer | null>;

  uri(): UriModel | null;
};
