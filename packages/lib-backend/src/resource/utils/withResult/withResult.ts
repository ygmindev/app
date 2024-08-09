import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import {
  type WithResultModel,
  type WithResultParamsModel,
} from '@lib/backend/resource/utils/withResult/withResult.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { Mutation, Query } from 'type-graphql';

export const withResult =
  <TType extends unknown>({
    Resource,
    access = ACCESS_LEVEL.PUBLIC,
    name,
    operation = GRAPHQL_OPERATION_TYPE.QUERY,
  }: WithResultParamsModel<TType>): WithResultModel =>
  (target, propertyKey, descriptor) => {
    withAccess({ access })(target, propertyKey, descriptor);
    (operation === GRAPHQL_OPERATION_TYPE.QUERY ? Query : Mutation)(Resource, {
      name,
    })(target, propertyKey, descriptor);
  };
