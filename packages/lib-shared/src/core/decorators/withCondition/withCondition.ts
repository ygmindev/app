import type { CallableArgsModel } from '#lib-shared/core/core.models';

type _WithConditionResultModel =
  | ClassDecorator
  | MethodDecorator
  | ParameterDecorator
  | PropertyDecorator;

export const withCondition =
  (
    condition: boolean,
    ifTrue?: CallableArgsModel<_WithConditionResultModel>,
    ifFalse?: CallableArgsModel<_WithConditionResultModel>,
  ) =>
  (...params: Array<unknown>): void =>
    ifTrue && condition
      ? (ifTrue() as CallableArgsModel<void, Array<unknown>>)(...params)
      : ifFalse && !condition
      ? (ifFalse() as CallableArgsModel<void, Array<unknown>>)(...params)
      : undefined;
