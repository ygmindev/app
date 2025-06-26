import { type ClassModel } from '@lib/shared/core/core.models';
import { type Container } from 'inversify';

export type _ContainerModel = {
  container(): Container;
  get<TType extends unknown>(type: ClassModel<TType> | string, name?: string): TType;
  set<TType extends unknown>(type: ClassModel<TType> | string, value: TType, name?: string): void;
};
