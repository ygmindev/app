import { type ClientParamsModel } from '@tool/task/core/utils/Client/Client.models';

export type ClientRunParamsModel = Partial<ClientParamsModel> & {
  queue?: string;
  workflow: string;
};

export type ClientRunModel = void;
