import { type ClientRunOptionsModel } from '@tool/task/core/utils/Client/Client.models';

export type _ClientParamsModel = {
  id?: string;
};

export type _ClientModel = {
  initialize(): Promise<void>;
  run(workflow: string, params?: ClientRunOptionsModel): Promise<void>;
};
