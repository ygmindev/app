import { type ExecuteParamsModel } from '@tool/task/core/utils/execute/execute.models';

export type StartParamsModel = Pick<ExecuteParamsModel, 'command' | 'isSilent'> & {
  host?: string;
  port?: number;
};

export type StartModel = void;
