export const sortKeys = <TType extends Record<string, unknown>>(value: TType): TType =>
  Object.keys(value)
    .sort()
    .reduce((result, key) => ({ ...result, [key]: value[key] }), {} as TType);
