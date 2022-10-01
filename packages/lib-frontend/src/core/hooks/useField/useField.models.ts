export interface UseFieldParamsModel<TType> {
  defaultValue: TType;
  onChange?: (value: TType) => unknown;
  value?: TType;
}

export interface UseFieldModel<TType> {
  fieldValue: TType;
  setFieldValue(value: TType): unknown;
}
