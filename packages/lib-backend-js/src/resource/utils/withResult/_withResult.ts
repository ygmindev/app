import {
  type _WithResultModel,
  type _WithResultParamsModel,
} from '@lib/backend/resource/utils/withResult/_withResult.models';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { Mutation, Query, Subscription } from 'type-graphql';

export const _withResult =
  <TType extends unknown>({
    Resource,
    name,
    operation = GRAPHQL_OPERATION_TYPE.QUERY,
    topics,
  }: _WithResultParamsModel<TType>): _WithResultModel =>
  (target, propertyKey, descriptor) => {
    if (operation === GRAPHQL_OPERATION_TYPE.SUBSCRIPTION) {
      Subscription(() => Resource, { topics: topics ?? [] })(target, propertyKey, descriptor);
    } else {
      const Operation = (() => {
        switch (operation) {
          case GRAPHQL_OPERATION_TYPE.QUERY:
            return Query;
          case GRAPHQL_OPERATION_TYPE.MUTATION:
            return Mutation;
          default:
            return Query;
        }
      })();
      Operation(Resource, {
        name,
      })(target, propertyKey, descriptor);
    }
  };
