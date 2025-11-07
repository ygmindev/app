import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type _BuildParamsModel = Pick<BundleConfigModel, 'entryFiles' | 'outputDir'>;

export type _BuildModel = void;
