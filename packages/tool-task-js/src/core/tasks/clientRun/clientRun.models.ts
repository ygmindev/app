import {
  type ClientParamsModel,
  type ClientRunOptionsModel,
} from '@tool/task/core/utils/Client/Client.models';

export type ClientRunParamsModel = Partial<ClientParamsModel> &
  Partial<ClientRunOptionsModel> & {
    workflow: string;
  };

export type ClientRunModel = void;
