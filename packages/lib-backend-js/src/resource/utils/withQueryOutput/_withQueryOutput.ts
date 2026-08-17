import {
  type _WithQueryOutputModel,
  type _WithQueryOutputParamsModel,
} from '@lib/backend/resource/utils/withQueryOutput/_withQueryOutput.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { GRAPHQL_OPERATION } from '@lib/shared/graphql/graphql.constants';
import { GraphQLDateTime, GraphQLUnsignedFloat } from 'graphql-scalars';
import { Mutation, Query, Subscription } from 'type-graphql';

export const _withQueryOutput = <TType extends unknown>({
  isArray,
  name,
  operation = GRAPHQL_OPERATION.QUERY,
  Resource,
  topic,
  type,
}: _WithQueryOutputParamsModel<TType>): _WithQueryOutputModel => {
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
  if (operation === GRAPHQL_OPERATION.SUBSCRIPTION) {
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
        case GRAPHQL_OPERATION.QUERY:
          return Query;
        case GRAPHQL_OPERATION.MUTATION:
          return Mutation;
        default:
          return Query;
      }
    })();
    return Operation(ResourceF, { name });
  }
};
