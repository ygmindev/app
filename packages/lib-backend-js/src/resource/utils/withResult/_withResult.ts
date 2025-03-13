import {
  type _WithResultModel,
  type _WithResultParamsModel,
} from '@lib/backend/resource/utils/withResult/_withResult.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { Mutation, Query, Subscription } from 'type-graphql';

export const _withResult = <TType extends unknown, TData extends unknown>({
  Resource,
  filter,
  name,
  operation = GRAPHQL_OPERATION_TYPE.QUERY,
  topics,
}: _WithResultParamsModel<TType, TData>): _WithResultModel => {
  if (operation === GRAPHQL_OPERATION_TYPE.SUBSCRIPTION) {
    return Subscription(Resource, {
      filter: filter
        ? async ({ context, payload }) =>
            filter({
              context: context as RequestContextModel,
              payload: payload as never, // TODO: type resource payload
            })
        : undefined,
      name,
      topics: topics ?? [],
    });
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
    return Operation(Resource, { name });
  }
};
