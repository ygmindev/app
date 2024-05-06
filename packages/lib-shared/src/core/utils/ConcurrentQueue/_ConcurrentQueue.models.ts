export type _ConcurrentQueueParamsModel = {
  interval?: number;
  maxConcurrency?: number;
};

export type _ConcurrentQueueModel = {
  add(fn: (() => Promise<void>) | Array<() => Promise<void>>): void;

  clear(): void;

  run(): Promise<void>;
};
