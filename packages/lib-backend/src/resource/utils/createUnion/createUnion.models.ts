import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type ClassModel, type PartialModel } from '@lib/shared/core/core.models';

export type CreateUnionParamsModel<TType extends unknown> = {
  Resource: Array<ResourceClassModel<PartialModel<TType>>>;
  name: string;
  resolve(value: TType): ClassModel<PartialModel<TType>> | undefined;
};

export type CreateUnionModel<TType extends unknown> = ResourceClassModel<TType>;
