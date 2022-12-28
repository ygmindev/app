export const isPromise = <TType>(value: TType): boolean =>
  Boolean(value && typeof (value as unknown as Promise<unknown>).then === 'function');
