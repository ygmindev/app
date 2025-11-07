import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type _BundleParamsModel = Pick<
  BundleConfigModel,
  'entryFiles' | 'outputDir' | 'transpilePatterns'
>;

export type _BundleModel = void;
