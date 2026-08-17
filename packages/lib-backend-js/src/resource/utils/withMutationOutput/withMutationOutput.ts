import {
  type WithMutationOutputModel,
  type WithMutationOutputParamsModel,
} from '@lib/backend/resource/utils/withMutationOutput/withMutationOutput.models';
import { withQueryOutput } from '@lib/backend/resource/utils/withQueryOutput/withQueryOutput';
import { GRAPHQL_OPERATION } from '@lib/shared/graphql/graphql.constants';

export const withMutationOutput =
  <TType extends unknown>({
    ...params
  }: WithMutationOutputParamsModel<TType>): WithMutationOutputModel =>
  (target, propertyKey, descriptor) =>
    withQueryOutput({
      ...params,
      operation: GRAPHQL_OPERATION.MUTATION,
    })(target, propertyKey, descriptor);
