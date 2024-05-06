import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { type MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export type MergeStrategyModel = `${MERGE_STRATEGY}`;

export type MergeParamsModel<TType> = [
  values: Array<TType | PartialDeepModel<TType>>,
  strategy?: MergeStrategyModel,
];
