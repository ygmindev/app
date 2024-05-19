import { type ClassModel } from '@lib/shared/core/core.models';

export type _ContainerModel = {
  get<TType extends unknown>(type: ClassModel<TType> | string, name?: string): TType;
  set<TType extends unknown>(type: ClassModel<TType> | string, value: TType, name?: string): void;
};
