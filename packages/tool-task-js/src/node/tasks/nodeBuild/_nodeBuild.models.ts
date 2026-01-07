import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';

export type _NodeBuildParamsModel = Pick<
  BundleConfigModel,
  'entryFiles' | 'format' | 'outDir' | 'watch'
> & {
  configRaw?: _BundleConfigModel;
};

export type _NodeBuildModel = void;
