import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceServiceModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';

export type DatabaseModel = {
  close: CallablePromiseModel;
  connect(): Promise<void>;
  getRepository<TType>(params: ResourceNameParamsModel): RepositoryModel<TType>;
};

export type RepositoryModel<TType> = {
  clear: CallablePromiseModel;
  count: CallablePromiseModel<number>;
} & ResourceServiceModel<TType, EntityResourceDataModel<TType>>;
