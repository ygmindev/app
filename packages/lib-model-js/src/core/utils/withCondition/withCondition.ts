import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import {
  type WithConditionModel,
  type WithConditionParamsModel,
} from '@lib/shared/core/utils/withCondition/withCondition.models';

export const withCondition =
  (...[condition, ifTrue]: WithConditionParamsModel): WithConditionModel =>
  (...params: Array<unknown>) => {
    if (condition()) {
      const decorators = ifTrue();
      return isArray(decorators)
        ? decorators.forEach((decorator) =>
            (decorator as (...args: Array<unknown>) => void)(...params),
          )
        : (decorators as (...args: Array<unknown>) => void)(...params);
    }
  };
