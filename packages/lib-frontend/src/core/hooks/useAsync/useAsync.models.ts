export type UseAsyncParamsModel = [
  params: (isMounted: () => boolean) => Promise<void>,
  deps?: Array<unknown>,
  onUnmount?: () => Promise<void>,
];

export type UseAsyncModel = void;
