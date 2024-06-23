export type _PubSubModel = {
  clear(): void;
  publish<TType extends unknown>(name: string, params: TType): void;
  subscribe<TType extends unknown>(name: string, handler: (params: TType) => void): void;
  unsubscribe<TType extends unknown>(name: string, handler: (params: TType) => void): void;
};
