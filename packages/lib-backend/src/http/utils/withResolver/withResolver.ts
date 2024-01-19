import { _withResolver } from '@lib/backend/http/utils/withResolver/_withResolver';
import {
  type WithResolverModel,
  type WithResolverParamsModel,
} from '@lib/backend/http/utils/withResolver/withResolver.models';

export const withResolver = <TType extends unknown>(
  params: WithResolverParamsModel<TType> = {},
): WithResolverModel => _withResolver(params);
