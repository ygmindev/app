import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type WithParamsParamsModel<TType> = {
  Resource(): ResourceClassModel<TType>;
};

export type WithParamsModel = ParameterDecorator;
