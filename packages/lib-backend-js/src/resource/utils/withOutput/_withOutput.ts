import {
  type _WithOutputModel,
  type _WithOutputParamsModel,
} from '@lib/backend/resource/utils/withOutput/_withOutput.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { GraphQLDateTime, GraphQLNonEmptyString, GraphQLUnsignedFloat } from 'graphql-scalars';
import { Mutation, Query, Subscription } from 'type-graphql';

export const _withOutput = <TType extends unknown, TData extends unknown>({
  Resource,
  filter,
  isArray,
  name,
  operation = GRAPHQL_OPERATION_TYPE.QUERY,
  topics,
  type,
}: _WithOutputParamsModel<TType, TData>): _WithOutputModel => {
  const ResourceF = Resource
    ? () => (isArray ? [Resource()] : Resource())
    : (() => {
        switch (type) {
          case DATA_TYPE.STRING:
            return () => (isArray ? [GraphQLNonEmptyString] : GraphQLNonEmptyString);
          case DATA_TYPE.DATE:
            return () => (isArray ? [GraphQLDateTime] : GraphQLDateTime);
          default:
            return () => (isArray ? [GraphQLUnsignedFloat] : GraphQLUnsignedFloat);
        }
      })();
  if (operation === GRAPHQL_OPERATION_TYPE.SUBSCRIPTION) {
    return Subscription(ResourceF, {
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
    return Operation(ResourceF, { name });
  }
};
