import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type _WithParamsParamsModel<TType extends unknown> = {
  Resource(): ResourceClassModel<TType>;
  isOptional?: boolean;
};

export type _WithParamsModel = ParameterDecorator;
