import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type _WithInputParamsModel<TType extends unknown> = {
  isOptional?: boolean;
  name?: string;
  Resource(): ResourceClassModel<TType>;
};

export type _WithInputModel = ParameterDecorator;
