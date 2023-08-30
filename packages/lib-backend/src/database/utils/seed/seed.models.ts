import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';

export type SeedParamsModel = {
  names?: Array<string>;
};

export type SeedDataModel<TType> = ResourceNameParamsModel & {
  data: Array<TType | (() => Promise<TType>)>;
};
