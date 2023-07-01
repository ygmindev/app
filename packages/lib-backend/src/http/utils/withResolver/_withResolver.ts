import { Resolver } from 'type-graphql';

import {
  type _WithResolverModel,
  type _WithResolverParamsModel,
} from '#lib-backend/http/utils/withResolver/_withResolver.models';

export function _withResolver<TType>({
  Resource,
  isAbstract,
}: _WithResolverParamsModel<TType> = {}): _WithResolverModel {
  return (target) => {
    if (Resource && !isAbstract) {
      return Resolver(() => Resource)(target);
    }
    return Resolver()(target);
  };
}
