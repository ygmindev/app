export type _DatabaseInMemoryModel = {
  start(): Promise<void>;

  stop(): Promise<void>;
};
