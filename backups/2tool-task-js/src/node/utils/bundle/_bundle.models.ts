import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type _BundleParamsModel = Pick<
  BundleConfigModel,
  'entryFiles' | 'outDirname' | 'transpilePatterns'
>;

export type _BundleModel = void;
