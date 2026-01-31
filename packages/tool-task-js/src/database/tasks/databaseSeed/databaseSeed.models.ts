import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';

export type DatabaseSeedParamsModel = {
  entities?: Array<string>;
};

export type DatabaseSeedModel = {};

export type DatabaseSeedDataModel<TType, TRoot = undefined> = ResourceNameParamsModel<TRoot> & {
  data?(): Array<TType>;
  root?(): Promise<string | undefined>;
};
