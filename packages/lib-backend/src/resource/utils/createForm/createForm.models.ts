import { type ClassModel } from '#lib-shared/core/core.models';

export type CreateFormParamsModel<TType> = {
  Resource: TType;
  name: string;
};

export type CreateFormModel<TType> = ClassModel<TType>;
