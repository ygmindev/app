export type AsyncQueueModel<TType> = AsyncIterableIterator<TType> & {
  next(): Promise<IteratorResult<TType>>;

  push(value: TType): void;

  return(): Promise<IteratorResult<TType>>;

  stop(): void;
};
