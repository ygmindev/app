import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { type WithResourceNameModel } from '#lib-shared/resource/decorators/withResourceName/withResourceName.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceServiceModel } from '#lib-shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type DatabaseModel = {
  close: CallablePromiseModel;
  connect(): Promise<void>;
  getRepository<TType>(params: WithResourceNameModel): RepositoryModel<TType>;
};

export type RepositoryModel<TType> = {
  clear: CallablePromiseModel;
  count: CallablePromiseModel<number>;
} & ResourceServiceModel<TType, EntityResourceDataModel<TType>>;
