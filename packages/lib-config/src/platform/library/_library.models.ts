import type { ConfigStaticModel } from '@lib/config/core/core.models';

export type LibraryConfigModel = ConfigStaticModel<{
  extension: string;
  path: string;
  patterns: Array<string>;
}>;

export type _LibraryConfigModel = LibraryConfigModel;
