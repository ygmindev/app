import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import {
  type WithResultModel,
  type WithResultParamsModel,
} from '@lib/backend/resource/utils/withResult/withResult.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { Mutation, Query, Subscription } from 'type-graphql';

export const withResult =
  <TType extends unknown>({
    Resource,
    access = ACCESS_LEVEL.PUBLIC,
    name,
    operation = GRAPHQL_OPERATION_TYPE.QUERY,
    topics,
  }: WithResultParamsModel<TType>): WithResultModel =>
  (target, propertyKey, descriptor) => {
    withAccess({ access })(target, propertyKey, descriptor);

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
