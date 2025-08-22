import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type ResourceManyModel } from '@lib/shared/resource/utils/ResourceMany/ResourceMany.models';

export type CreateResourceManyParamsModel<TType> = {
  name: string;
  Resource(): ResourceClassModel<TType>;
};

export type CreateResourceManyModel<TType> = ResourceClassModel<ResourceManyModel<TType>>;
