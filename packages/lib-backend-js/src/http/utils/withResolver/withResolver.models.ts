import {
  type _WithResolverModel,
  type _WithResolverParamsModel,
} from '@lib/backend/http/utils/withResolver/_withResolver.models';

export type WithResolverParamsModel<TType extends unknown> = _WithResolverParamsModel<TType>;

export type WithResolverModel = _WithResolverModel;
