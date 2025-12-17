import {
  type _WithOutputModel,
  type _WithOutputParamsModel,
} from '@lib/backend/resource/utils/withOutput/_withOutput.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { GraphQLDateTime, GraphQLUnsignedFloat } from 'graphql-scalars';
import { Mutation, Query, Subscription } from 'type-graphql';

export const _withOutput = <TType extends unknown>({
  Resource,
  isArray,
  name,
  operation = GRAPHQL_OPERATION_TYPE.QUERY,
  topic,
  type,
}: _WithOutputParamsModel<TType>): _WithOutputModel => {
  const ResourceF = Resource
    ? () => (isArray ? [Resource()] : Resource())
    : (() => {
        switch (type) {
          case DATA_TYPE.BOOLEAN:
            return () => (isArray ? [Boolean] : Boolean);
          case DATA_TYPE.STRING:
            return () => (isArray ? [String] : String);
          case DATA_TYPE.DATE:
            return () => (isArray ? [GraphQLDateTime] : GraphQLDateTime);
          default:
            return () => (isArray ? [GraphQLUnsignedFloat] : GraphQLUnsignedFloat);
        }
      })();
  if (operation === GRAPHQL_OPERATION_TYPE.SUBSCRIPTION) {
    if (!topic) {
      throw new InvalidArgumentError('topic');
    }
    return Subscription(ResourceF, {
      name,
      subscribe: async ({ args, context }) =>
        Container.get(PubSub).subscribe(topic(args.input, context)),
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
