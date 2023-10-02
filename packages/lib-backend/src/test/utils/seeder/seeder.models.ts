import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';

export type SeederModel = {
  clear(): Promise<void>;
  seed(): Promise<void>;
};

export type SeedDataModel<TType> = ResourceNameParamsModel & {
  data(): Array<TType>;
};
