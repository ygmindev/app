export type UseAsyncParamsModel = [
  params: (isMounted: () => boolean) => Promise<(() => void) | void>,
  deps?: Array<unknown>,
];

export type UseAsyncModel = void;
