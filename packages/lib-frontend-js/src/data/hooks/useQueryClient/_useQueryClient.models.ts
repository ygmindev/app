export type _UseQueryClientModel = {
  cancel(id: Array<unknown>): Promise<void>;

  invalidate(id: Array<unknown>): Promise<void>;

  set(id: Array<unknown>, value?: unknown | ((prev?: unknown) => unknown)): Promise<void>;
};
