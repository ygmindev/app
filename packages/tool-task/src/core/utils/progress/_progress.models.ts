import { type CallableModel } from '#lib-shared/core/core.models';

export type _ProgressParamsModel = {
  name: string;
};

export type _ProgressModel = {
  increment(value?: number): void;
  start(end: number, start?: number): void;
  stop: CallableModel;
  update(value: number): void;
};
