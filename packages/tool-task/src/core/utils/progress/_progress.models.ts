import type { CallableModel } from '@lib/shared/core/core.models';

export interface _ProgressParamsModel {
  name: string;
}

export interface _ProgressModel {
  increment(value?: number): void;
  start(end: number, start?: number): void;
  stop: CallableModel;
  update(value: number): void;
}
