import {
  type WithConditionModel,
  type WithConditionParamsModel,
} from '#lib-shared/core/utils/withCondition/withCondition.models';

export const withCondition =
  (...[condition, ifTrue]: WithConditionParamsModel): WithConditionModel =>
  (...params: Array<unknown>) =>
    condition ? (ifTrue() as (...args: Array<unknown>) => void)(...params) : undefined;
