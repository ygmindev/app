import {
  type _ClientModel,
  type _ClientParamsModel,
} from '@tool/task/orchestrator/utils/Client/_Client.models';

export type ClientParamsModel = Omit<_ClientParamsModel, 'queue'> & {
  queue?: string;
};

export type ClientModel = _ClientModel;

export type ExecutionResultModel = {
  id: string;
};
