import { type CallableModel } from '#lib-shared/core/core.models';
import {
  type WithConditionModel,
  type WithConditionParamsModel,
} from '#lib-shared/core/utils/withCondition/withCondition.models';

export const withCondition =
  (...[condition, ifTrue, ifFalse]: WithConditionParamsModel): WithConditionModel =>
  (...params) =>
    ifTrue && condition
      ? (ifTrue() as CallableModel)(...params)
      : ifFalse && !condition
      ? (ifFalse() as CallableModel)(...params)
      : undefined;
