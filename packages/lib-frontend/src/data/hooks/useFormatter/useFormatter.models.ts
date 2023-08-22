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
};

export type DateFormatterOptionsModel = {
  format?: string;
  isReadable?: boolean;
};
