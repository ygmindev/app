import { type ValuePropsModel } from '#lib-frontend/form/form.models';

export type UseValueControlledParamsModel<TType> = ValuePropsModel<TType>;

export type UseValueControlledModel<TType> = {
  valueControlled?: TType;
  valueControlledSet(value?: TType): void;
};
