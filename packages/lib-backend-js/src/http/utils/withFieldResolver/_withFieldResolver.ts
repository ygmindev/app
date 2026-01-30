import {
  type _WithFieldResolverModel,
  type _WithFieldResolverParamsModel,
} from '@lib/backend/http/utils/withFieldResolver/_withFieldResolver.models';
import { type CallableModel } from '@lib/shared/core/core.models';
import { FieldResolver } from 'type-graphql';

export const _withFieldResolver =
  <TType extends unknown>({
    Resource,
  }: _WithFieldResolverParamsModel<TType>): _WithFieldResolverModel =>
  (target, propertyKey, descriptor) => {
    const original = descriptor.value as CallableModel<TType>;
    (descriptor as TypedPropertyDescriptor<unknown>).value = async function (
      ...args: Array<unknown>
    ) {
      const result = await original.apply(this, args);
      if ((result as { entity: TType })?.entity) {
        return (result as { entity: TType }).entity;
      }
      return result;
    };
    return FieldResolver(Resource)(target, propertyKey, descriptor);
  };
