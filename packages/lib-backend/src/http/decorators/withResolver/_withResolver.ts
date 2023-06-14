import type { _WithResolverParamsModel } from '#lib-backend/http/decorators/withResolver/_withResolver.models';
import { Resolver } from 'type-graphql';

export function _withResolver<TType>({
  Resource,
  isAbstract,
}: _WithResolverParamsModel<TType> = {}): ClassDecorator {
  return (target) => {
    if (isAbstract) {
      return Resolver({ isAbstract: true })(target);
    }
    if (Resource) {
      return Resolver(() => Resource)(target);
    }
    return Resolver()(target);
  };
}
