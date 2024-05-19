import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import {
  type WithResultModel,
  type WithResultParamsModel,
} from '@lib/backend/resource/utils/withResult/withResult.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { Mutation, Query } from 'type-graphql';
import { type ReturnTypeFunc } from 'type-graphql/dist/decorators/types';

export const withResult =
  <TType extends unknown>({
    Resource,
    level = ACCESS_LEVEL.PUBLIC,
    name,
    operation = GRAPHQL_OPERATION_TYPE.QUERY,
  }: WithResultParamsModel<TType>): WithResultModel =>
  (target, propertyKey, descriptor) => {
    withAccess({ level })(target, propertyKey, descriptor);
    (operation === GRAPHQL_OPERATION_TYPE.QUERY ? Query : Mutation)(Resource as ReturnTypeFunc, {
      name,
    })(target, propertyKey, descriptor);
  };
