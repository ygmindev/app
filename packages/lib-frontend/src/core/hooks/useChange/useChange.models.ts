export interface UseChangeParamsModel<TType> {
  onChange(previous?: TType): void;
  value: TType;
}
