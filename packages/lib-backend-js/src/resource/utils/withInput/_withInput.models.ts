import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type _WithInputParamsModel<TType extends unknown> = {
  Resource(): ResourceClassModel<TType>;
  isOptional?: boolean;
  name?: string;
};

export type _WithInputModel = ParameterDecorator;
