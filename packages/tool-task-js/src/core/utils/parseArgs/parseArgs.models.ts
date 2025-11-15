export type ParseArgsModel<TType extends Record<string, unknown> = Record<string, unknown>> =
  Record<string, string | boolean | number | Array<string | number | boolean>> & TType;
