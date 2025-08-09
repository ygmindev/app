import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type BuildJsParamsModel = Pick<
  BundleConfigModel,
  'entryFiles' | 'outputPathname' | 'transpilePatterns'
>;
