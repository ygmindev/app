export const toPlainObject = <TType>(params: TType): TType & object =>
  ({ ...params } as TType & object);
