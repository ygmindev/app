import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type _NodeBuildParamsModel = Pick<
  BundleConfigModel,
  'entryFiles' | 'extensions' | 'format' | 'outDir'
>;

export type _NodeBuildModel = void;
