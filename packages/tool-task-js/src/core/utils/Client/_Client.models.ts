import { type ExceutionContextModel } from '@tool/task/core/core.models';

export type _ClientParamsModel = {
  id?: string;
};

export type _ClientModel = {
  initialize(): Promise<void>;

  run(
    workflow: string,
    params?: Record<string, unknown>,
    context?: ExceutionContextModel,
  ): Promise<void>;
};
