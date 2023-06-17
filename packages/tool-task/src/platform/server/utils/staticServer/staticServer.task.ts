import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { command } from '#tool-task/core/utils/command/command';
import { STATIC_SERVER_PORT } from '#tool-task/platform/server/utils/staticServer/staticServer.constants';
import type {
  StaticServerModel,
  StaticServerParamsModel,
} from '#tool-task/platform/server/utils/staticServer/staticServer.models';

export const staticServer = async ({
  isOpen = true,
  port = STATIC_SERVER_PORT,
  root,
}: StaticServerParamsModel): StaticServerModel =>
  await command(
    fromExecutable(`http-server ${root} --cors -i false --port ${port} ${isOpen ? '--o' : ''}`),
    { root },
  );
