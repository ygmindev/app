import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type _BuildAppParamsModel = {
  bundle: BundleConfigModel;
};

export type _BuildAppModel = Promise<void>;
