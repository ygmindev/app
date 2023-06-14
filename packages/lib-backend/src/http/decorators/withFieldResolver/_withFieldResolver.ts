import type { _WithFieldResolverParamsModel } from '#lib-backend/http/decorators/withFieldResolver/_withFieldResolver.models';
import { FieldResolver } from 'type-graphql';

export const _withFieldResolver =
  <TType>({ Resource }: _WithFieldResolverParamsModel<TType>): MethodDecorator =>
  (target, propertyKey, descriptor) =>
    (Resource ? FieldResolver(() => Resource, {}) : FieldResolver())(
      target,
      propertyKey,
      descriptor,
    );
