export const isPromise = <TType extends unknown>(value: TType): boolean =>
  Boolean(value && typeof (value as unknown as Promise<unknown>).then === 'function');
