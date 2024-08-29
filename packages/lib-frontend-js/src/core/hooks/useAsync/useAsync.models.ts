export type UseAsyncParamsModel = [
  params: (isMounted: () => boolean) => Promise<void>,
  deps?: Array<unknown>,
];

export type UseAsyncModel = void;
