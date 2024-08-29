import { _withFieldResolver } from '@lib/backend/http/utils/withFieldResolver/_withFieldResolver';
import {
  type WithFieldResolverModel,
  type WithFieldResolverParamsModel,
} from '@lib/backend/http/utils/withFieldResolver/withFieldResolver.models';

export const withFieldResolver = <TType extends unknown>(
  params: WithFieldResolverParamsModel<TType>,
): WithFieldResolverModel => _withFieldResolver(params);
