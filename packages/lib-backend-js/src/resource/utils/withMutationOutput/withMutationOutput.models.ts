import {
  type WithQueryOutputModel,
  type WithQueryOutputParamsModel,
} from '@lib/backend/resource/utils/withQueryOutput/withQueryOutput.models';

export type WithMutationOutputParamsModel<TType extends unknown> = Omit<
  WithQueryOutputParamsModel<TType>,
  'operation'
>;

export type WithMutationOutputModel = WithQueryOutputModel;
