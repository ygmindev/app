import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';

export type SeedParamsModel = {
  entities?: Array<string>;
};

export type SeedModel = {};

export type SeedDataModel<TType, TRoot = undefined> = ResourceNameParamsModel<TRoot> & {
  data?(): Array<TType>;
  root?(): Promise<string | undefined>;
};
