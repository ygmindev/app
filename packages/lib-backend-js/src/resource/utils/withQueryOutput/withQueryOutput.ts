import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { _withQueryOutput } from '@lib/backend/resource/utils/withQueryOutput/_withQueryOutput';
import {
  type WithQueryOutputModel,
  type WithQueryOutputParamsModel,
} from '@lib/backend/resource/utils/withQueryOutput/withQueryOutput.models';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { GRAPHQL_OPERATION } from '@lib/shared/graphql/graphql.constants';

export const withQueryOutput =
  <TType extends unknown>({
    access = ACCESS_LEVEL.RESTRICTED,
    isArray,
    name,
    operation = GRAPHQL_OPERATION.QUERY,
    Resource,
    topic,
    type,
  }: WithQueryOutputParamsModel<TType>): WithQueryOutputModel =>
  (target, propertyKey, descriptor) => {
    withAccess({ access })(target, propertyKey, descriptor);
    _withQueryOutput({ isArray, name, operation, Resource, topic, type })(
      target,
      propertyKey,
      descriptor,
    );
  };
