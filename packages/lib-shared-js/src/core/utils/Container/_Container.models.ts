import { type ClassModel } from '@lib/shared/core/core.models';
import { type Container } from 'inversify';

export type _ContainerModel = {
  container(): Container;
  get<TType extends unknown>(type: ClassModel<TType>, name?: string): TType;
  set<TType extends unknown>(type: ClassModel<TType>, name?: string): void;
  set<TType extends unknown>(type: ClassModel<TType>, value: TType, name?: string): void;
};
