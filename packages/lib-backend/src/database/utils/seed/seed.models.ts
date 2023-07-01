import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';

export type SeedParamsModel = {
  names?: Array<string>;
};

export type SeedDataModel<TType> = {
  data: Array<TType | CallablePromiseModel<TType>>;
} & ResourceNameParamsModel;
