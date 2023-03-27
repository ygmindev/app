import type { CallableModel } from '@lib/shared/core/core.models';

type _WithConditionResultModel =
  | ClassDecorator
  | MethodDecorator
  | ParameterDecorator
  | PropertyDecorator;

export const withCondition =
  (
    condition: boolean,
    ifTrue?: CallableModel<_WithConditionResultModel>,
    ifFalse?: CallableModel<_WithConditionResultModel>,
  ) =>
  (...params: Array<unknown>): void =>
    ifTrue && condition
      ? (ifTrue() as CallableModel<void, Array<unknown>>)(...params)
      : ifFalse && !condition
      ? (ifFalse() as CallableModel<void, Array<unknown>>)(...params)
      : undefined;
