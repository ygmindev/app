import type { _WithResolverParamsModel } from '@lib/backend/graphql/decorators/withResolver/_withResolver.models';
import { Resolver } from 'type-graphql';

export const _withResolver =
  ({ isAbstract }: _WithResolverParamsModel = {}): ClassDecorator =>
  (target) =>
    Resolver({ isAbstract })(target);
