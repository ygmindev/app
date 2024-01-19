import {
  type _WithFieldResolverModel,
  type _WithFieldResolverParamsModel,
} from '@lib/backend/http/utils/withFieldResolver/_withFieldResolver.models';
import { FieldResolver } from 'type-graphql';

export const _withFieldResolver =
  <TType>({ Resource }: _WithFieldResolverParamsModel<TType> = {}): _WithFieldResolverModel =>
  (target, propertyKey, descriptor) =>
    FieldResolver(Resource)(target, propertyKey, descriptor);
