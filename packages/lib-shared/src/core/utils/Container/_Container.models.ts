import type { ConstructorModel } from '@lib/shared/core/core.models';

export interface _ContainerModel {
  get<TType>(type: ConstructorModel<TType>): TType;
  set<TType>(type: ConstructorModel<TType>, value: TType): void;
}
