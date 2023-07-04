import { type ArrayCallableModel, type OptionalCallableModel } from '#lib-shared/core/core.models';

type _WithConditionResultModel =
  | ClassDecorator
  | MethodDecorator
  | ParameterDecorator
  | PropertyDecorator;

export const withCondition =
  (
    condition: boolean,
    ifTrue?: OptionalCallableModel<_WithConditionResultModel>,
    ifFalse?: OptionalCallableModel<_WithConditionResultModel>,
  ) =>
  (...params: Array<unknown>): void =>
    ifTrue && condition
      ? (ifTrue() as ArrayCallableModel<void, Array<unknown>>)(...params)
      : ifFalse && !condition
      ? (ifFalse() as ArrayCallableModel<void, Array<unknown>>)(...params)
      : undefined;
