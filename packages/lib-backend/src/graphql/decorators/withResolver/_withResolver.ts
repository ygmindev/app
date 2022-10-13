import type { _WithResolverParamsModel } from '@lib/backend/graphql/decorators/withResolver/_withResolver.models';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { Resolver } from 'type-graphql';

export const _withResolver =
  <TType>({ Resource, isAbstract }: _WithResolverParamsModel<TType>): ClassDecorator =>
  (target) => {
    if (Resource) {
      return Resolver(() => Resource, { isAbstract })(target);
    }
    if (isAbstract) {
      return Resolver({ isAbstract: true })(target);
    }
    throw new NotImplementedError('resource for non-abstract resolver');
  };
