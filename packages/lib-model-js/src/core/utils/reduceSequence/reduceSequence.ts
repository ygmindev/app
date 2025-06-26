import {
  type ReduceSequenceModel,
  type ReduceSequenceParamsModel,
} from '@lib/shared/core/utils/reduceSequence/reduceSequence.models';
import reduce from 'lodash/reduce';

export const reduceSequence = async <TType, TResult>(
  ...[values, reducer, initialResult]: ReduceSequenceParamsModel<TType, TResult>
): Promise<ReduceSequenceModel<TResult>> =>
  reduce(
    values as never,
    async (result: Promise<TResult>, v, k) => reducer(await result, v, k as never),
    Promise.resolve(initialResult),
  );
