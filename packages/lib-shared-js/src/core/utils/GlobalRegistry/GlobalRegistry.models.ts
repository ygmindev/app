export type GlobalRegistryModel = {
  provide<TType extends unknown>(key: string, factory: () => TType): TType;
};
