import { type ResourceClassModel } from '#lib-backend/resource/resource.models';

export type CreateFormParamsModel<TType> = {
  Resource: TType;
  name: string;
};

export type CreateFormModel<TType> = ResourceClassModel<TType>;
