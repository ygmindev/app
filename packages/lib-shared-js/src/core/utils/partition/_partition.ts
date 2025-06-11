import {
  type _PartitionModel,
  type _PartitionParamsModel,
} from '@lib/shared/core/utils/partition/_partition.models';
import partition from 'lodash/partition';

export const _partition = <
  TType extends unknown,
  TCondition extends TType,
  TIsIndex extends boolean = false,
>(
  ...[params, condition, isIndex]: _PartitionParamsModel<TType, TCondition, TIsIndex>
): _PartitionModel<TType, TCondition, TIsIndex> => {
  if (isIndex) {
    const paramsF = params.map((value, index) => ({ index, value }));
    const conditionF = ({ value }: { value: TType }): boolean => condition(value);
    const [trueValues, falseValues] = partition(paramsF, conditionF);
    return [
      [trueValues.map((x) => x.value), falseValues.map((x) => x.value)],
      [trueValues.map((x) => x.index), falseValues.map((x) => x.index)],
    ] as _PartitionModel<TType, TCondition, TIsIndex>;
  }
  return partition(params, condition) as _PartitionModel<TType, TCondition, TIsIndex>;
};
