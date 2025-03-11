import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { _withResult } from '@lib/backend/resource/utils/withResult/_withResult';
import {
  type WithResultModel,
  type WithResultParamsModel,
} from '@lib/backend/resource/utils/withResult/withResult.models';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';

export const withResult =
  <TType extends unknown>({
    Resource,
    access = ACCESS_LEVEL.RESTRICTED,
    filter,
    name,
    operation = GRAPHQL_OPERATION_TYPE.QUERY,
    topics,
  }: WithResultParamsModel<TType>): WithResultModel =>
  (target, propertyKey, descriptor) => {
    withAccess({ access })(target, propertyKey, descriptor);
    _withResult({ Resource, filter, name, operation, topics })(target, propertyKey, descriptor);
  };
