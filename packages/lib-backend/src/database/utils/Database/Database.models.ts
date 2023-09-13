import { type _DatabaseModel } from '#lib-backend/database/utils/Database/_Database.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceServiceModel } from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export type DatabaseModel = _DatabaseModel;

export type RepositoryModel<TType> = {
  clear(): Promise<void>;
  count(): Promise<number>;
} & ResourceServiceModel<TType, EntityResourceDataModel<TType>>;
