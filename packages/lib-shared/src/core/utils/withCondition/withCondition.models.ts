import { type DecoratorModel } from '#lib-shared/core/core.models';

export type WithConditionParamsModel = [
  condition: boolean,
  ifTrue?: () => DecoratorModel,
  ifFalse?: () => DecoratorModel,
];

export type WithConditionModel = () => void;
