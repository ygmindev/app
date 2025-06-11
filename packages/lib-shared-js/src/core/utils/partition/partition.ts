import { _partition } from '@lib/shared/core/utils/partition/_partition';
import {
  type PartitionModel,
  type PartitionParamsModel,
} from '@lib/shared/core/utils/partition/partition.models';

export const partition = <
  TType extends unknown,
  TCondition extends TType,
  TIsIndex extends boolean = false,
>(
  ...[params, condition, isIndex]: PartitionParamsModel<TType, TCondition, TIsIndex>
): PartitionModel<TType, TCondition, TIsIndex> => _partition(params, condition, isIndex);
