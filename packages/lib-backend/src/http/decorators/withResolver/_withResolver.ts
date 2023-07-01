import { Resolver } from 'type-graphql';

import { type _WithResolverParamsModel } from '#lib-backend/http/decorators/withResolver/_withResolver.models';

export function _withResolver<TType>({
  Resource,
  isAbstract,
}: _WithResolverParamsModel<TType> = {}): ClassDecorator {
  return (target) => {
    if (Resource && !isAbstract) {
      return Resolver(() => Resource)(target);
    }
    return Resolver()(target);
  };
}
