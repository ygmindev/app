import type { PartialDeepModel } from '@lib/shared/core/core.models';
import type { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

type MergeStrategyModel = `${MERGE_STRATEGY}`;

export interface MergeParamsModel<TType> {
  strategy?: MergeStrategyModel;
  values: Array<TType | PartialDeepModel<TType>>;
}
