import { type ValuePropsModel } from '@lib/frontend/data/data.models';

export type UseValueControlledParamsModel<TType> = ValuePropsModel<TType>;

export type UseValueControlledModel<TType> = {
  valueControlled?: TType;
  valueControlledSet(value?: TType): void;
};
