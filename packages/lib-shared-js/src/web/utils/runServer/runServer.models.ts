import {
  type _RunServerModel,
  type _RunServerParamsModel,
} from '@lib/shared/web/utils/runServer/_runServer.models';

export type RunServerParamsModel = Omit<_RunServerParamsModel, 'onError' | 'onStart'>;

export type RunServerModel = _RunServerModel;
