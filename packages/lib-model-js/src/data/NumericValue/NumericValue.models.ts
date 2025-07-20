export type NumericValueModel = {
  unit?: NUMERIC_UNIT;
  value: number;
};

export enum NUMERIC_UNIT {
  BASIS_POINT = 'basisPoint',
  BILLION = 'billion',
  MILLLION = 'million',
  PERCENT = 'percent',
  THOUSAND = 'thousand',
}
