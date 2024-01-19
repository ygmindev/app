import {
  type _WithResolverModel,
  type _WithResolverParamsModel,
} from '@lib/backend/http/utils/withResolver/_withResolver.models';

export type WithResolverParamsModel<TType> = _WithResolverParamsModel<TType>;

export type WithResolverModel = _WithResolverModel;
