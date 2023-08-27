import { type NumberUnitModel } from '#lib-frontend/data/data.models';

export type UseFormatterModel = {
  format: <TType>(value?: TType, options?: FormatterOptionsModel<TType>) => string;

  unformat: <TType>(value?: string, type?: d\, options?: FormatterOptionsModel<TType>) => TType | undefined;
};

export type FormatterOptionsModel<TType> = TType extends number
  ? NumberFormatterOptionsModel
  : TType extends Date
  ? DateFormatterOptionsModel
  : never;

export type NumberFormatterOptionsModel = {
  isScale?: boolean;
  isSeparated?: boolean;
  precision?: number;
  unit?: NumberUnitModel;
};

export type DateFormatterOptionsModel = {
  format?: string;
  isReadable?: boolean;
};
