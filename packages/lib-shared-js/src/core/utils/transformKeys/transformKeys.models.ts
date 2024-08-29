export type TransformKeysParamsModel<TType extends Record<string, unknown>> = [
  params: TType,
  transform: (key: string) => string,
];

export type TransformKeysModel<TType extends Record<string, unknown>> = TType extends Record<
  string,
  infer TValue
>
  ? Record<string, TValue>
  : never;
