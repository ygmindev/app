import {
  type _WithFieldResolverModel,
  type _WithFieldResolverParamsModel,
} from '@lib/backend/http/utils/withFieldResolver/_withFieldResolver.models';

export type WithFieldResolverParamsModel<TType extends unknown> = _WithFieldResolverParamsModel<TType>;

export type WithFieldResolverModel = _WithFieldResolverModel;
