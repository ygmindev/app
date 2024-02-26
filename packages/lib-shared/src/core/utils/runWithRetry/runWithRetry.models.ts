export type RunWithRetryParamsModel<TType = void> = [
  fn: () => Promise<TType>,
  options?: {
    delay?: number;
    retries?: number;
  },
];

export type RunWithRetryModel<TType = void> = TType;
