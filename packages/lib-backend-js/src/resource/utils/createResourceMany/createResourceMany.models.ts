import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type ResourceManyModel } from '@lib/shared/resource/utils/ResourceMany/ResourceMany.models';

export type CreateResourceManyParamsModel<TType> = {
  Resource(): ResourceClassModel<TType>;
  name: string;
};

export type CreateResourceManyModel<TType> = ResourceClassModel<ResourceManyModel<TType>>;
