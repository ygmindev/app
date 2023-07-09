import { type _DatabaseModel } from '#lib-backend/database/utils/Database/_Database.models';
import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceServiceModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';

export type DatabaseModel = _DatabaseModel;

export type RepositoryModel<TType> = {
  clear: OptionalCallablePromiseModel;
  count: OptionalCallablePromiseModel<number>;
} & ResourceServiceModel<TType, EntityResourceDataModel<TType>>;
