import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { type WithResourceNameModel } from '#lib-shared/resource/decorators/withResourceName/withResourceName.models';

export type SeedParamsModel = {
  names?: Array<string>;
};

export type SeedDataModel<TType> = {
  data: Array<TType | CallablePromiseModel<TType>>;
} & WithResourceNameModel;
