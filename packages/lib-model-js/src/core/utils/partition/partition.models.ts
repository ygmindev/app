import {
  type _PartitionModel,
  type _PartitionParamsModel,
} from '@lib/shared/core/utils/partition/_partition.models';

export type PartitionParamsModel<
  TType extends unknown,
  TCondition extends TType,
  TIsIndex extends boolean = false,
> = _PartitionParamsModel<TType, TCondition, TIsIndex>;

export type PartitionModel<
  TType extends unknown,
  TCondition extends TType,
  TIsIndex extends boolean = false,
> = _PartitionModel<TType, TCondition, TIsIndex>;
