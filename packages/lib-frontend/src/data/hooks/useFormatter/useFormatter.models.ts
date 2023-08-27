import { type NumberUnitModel } from '#lib-frontend/data/data.models';

export type UseFormatterModel = <TType>(
  value?: TType,
  options?: FormatterOptionsModel<TType>,
) => string;

export type FormatterOptionsModel<TType> = TType extends number
  ? NumberFormatterOptionsModel
  : TType extends Date
  ? DateFormatterOptionsModel
  : never;

export type NumberFormatterOptionsModel = {
  isSeparated?: boolean;
  multiplier?: number;
  precision?: number;
  unit?: NumberUnitModel;
};

export type DateFormatterOptionsModel = {
  format?: string;
  isReadable?: boolean;
};
