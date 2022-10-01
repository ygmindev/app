export interface UseChangeParamsModel<TType> {
  onChange(prev?: TType): void;
  value: TType;
}
