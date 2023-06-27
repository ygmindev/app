import { _server } from '#lib-platform/web/utils/server/_server';
import type { ServerModel, ServerParamsModel } from '#lib-platform/web/utils/server/server.models';
import { setup } from '#lib-shared/core/utils/setup/setup';

export const server = async ({
  onInitialize,
  onShutdown,
  ...params
}: ServerParamsModel): ServerModel => {
  await setup({ onInitialize, onShutdown });
  return _server({ ...params });
};
