import { type DecoratorModel } from '@lib/shared/core/core.models';

export type WithConditionParamsModel = [
  condition: () => boolean,
  ifTrue: () => DecoratorModel | Array<DecoratorModel>,
];

export type WithConditionModel = (...params: Array<unknown>) => void;
