import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';

export type SeedModel = {
  cleanUp(): Promise<void>;
};

export type SeedDataModel<TType, TRoot = undefined> = ResourceNameParamsModel<TRoot> & {
  data?(): Array<TType>;
  root?(): Promise<string | undefined>;
};
