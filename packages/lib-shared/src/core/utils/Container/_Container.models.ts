import type { ConstructorModel } from '@lib/shared/core/core.models';

export interface _ContainerModel {
  get<TType>(type: ConstructorModel<TType> | string): TType;
  set<TType>(type: ConstructorModel<TType> | string, value: TType): void;
}
