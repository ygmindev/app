import type {
  _ServerModel,
  _ServerParamsModel,
} from '#lib-platform/web/utils/server/_server.models';
import type { SetupParamsModel } from '#lib-shared/core/utils/setup/setup.models';

export type ServerParamsModel = _ServerParamsModel & SetupParamsModel;

export type ServerModel = Promise<_ServerModel>;
