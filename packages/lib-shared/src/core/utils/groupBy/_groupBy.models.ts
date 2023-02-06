export interface _GroupByParamsModel<TType> {
  by(value: TType): string;
  isSort?: boolean;
  value?: Array<TType>;
}

export type _GroupByModel<TType> = Record<string, Array<TType>>;
