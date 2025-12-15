import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { _withOutput } from '@lib/backend/resource/utils/withOutput/_withOutput';
import {
  type WithOutputModel,
  type WithOutputParamsModel,
} from '@lib/backend/resource/utils/withOutput/withOutput.models';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';

export const withOutput =
  <TType extends unknown, TData extends unknown, TParams extends unknown>({
    Resource,
    access = ACCESS_LEVEL.RESTRICTED,
    isArray,
    name,
    operation = GRAPHQL_OPERATION_TYPE.QUERY,
    topic,
    type,
  }: WithOutputParamsModel<TType, TData, TParams>): WithOutputModel =>
  (target, propertyKey, descriptor) => {
    withAccess({ access })(target, propertyKey, descriptor);
    _withOutput({ Resource, isArray, name, operation, topic, type })(
      target,
      propertyKey,
      descriptor,
    );
  };
