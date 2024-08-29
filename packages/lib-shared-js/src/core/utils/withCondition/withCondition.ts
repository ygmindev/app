import {
  type WithConditionModel,
  type WithConditionParamsModel,
} from '@lib/shared/core/utils/withCondition/withCondition.models';
import isArray from 'lodash/isArray';

export const withCondition =
  (...[condition, ifTrue]: WithConditionParamsModel): WithConditionModel =>
  (...params: Array<unknown>) => {
    if (condition()) {
      const decorators = ifTrue();
      return Array.isArray(decorators)
        ? decorators.forEach((decorator) =>
            (decorator as (...args: Array<unknown>) => void)(...params),
          )
        : (decorators as (...args: Array<unknown>) => void)(...params);
    }
  };
