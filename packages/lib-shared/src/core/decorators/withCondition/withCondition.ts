import type { CallableModel } from '@lib/shared/core/core.models';

type _WithConditionResultModel =
  | CallableModel
  | ClassDecorator
  | MethodDecorator
  | ParameterDecorator
  | PropertyDecorator;

export const withCondition =
  (condition: boolean, ifTrue?: _WithConditionResultModel, ifFalse?: _WithConditionResultModel) =>
  (...params: Array<unknown>): void =>
    ifTrue && condition
      ? (ifTrue as CallableModel<Array<unknown>>)(...params)
      : ifFalse && !condition
      ? (ifFalse as CallableModel<Array<unknown>>)(...params)
      : undefined;
