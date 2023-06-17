import type { ConstructorModel } from '#lib-shared/core/core.models';

export type _ContainerModel = {
  get<TType>(type: ConstructorModel<TType> | string, name?: string): TType;
  set<TType>(type: ConstructorModel<TType> | string, value: TType, name?: string): void;
};
