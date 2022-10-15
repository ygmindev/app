import type { _WithFieldResolverParamsModel } from '@lib/backend/graphql/decorators/withFieldResolver/_withFieldResolver.models';
import { FieldResolver } from 'type-graphql';

export const _withFieldResolver =
  <TType>({ Resource }: _WithFieldResolverParamsModel<TType>): MethodDecorator =>
  (target, propertyKey, descriptor) =>
    FieldResolver(() => Resource, {})(target, propertyKey, descriptor);
