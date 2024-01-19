import { type ClassModel } from '@lib/shared/core/core.models';

export type _ContainerModel = {
  get<TType>(type: ClassModel<TType> | string, name?: string): TType;
  set<TType>(type: ClassModel<TType> | string, value: TType, name?: string): void;
};
