import {
  type _WithResolverModel,
  type _WithResolverParamsModel,
} from '@lib/backend/http/utils/withResolver/_withResolver.models';
import { Resolver } from 'type-graphql';

export function _withResolver<TType extends unknown>({
  Resource,
}: _WithResolverParamsModel<TType> = {}): _WithResolverModel {
  return (target) => {
    if (Resource) {
      return Resolver(Resource)(target);
    }
    return Resolver()(target);
  };
}
