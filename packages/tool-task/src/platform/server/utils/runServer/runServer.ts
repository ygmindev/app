import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { command } from '#tool-task/core/utils/command/command';
import { STATIC_SERVER_PORT } from '#tool-task/platform/server/utils/runServer/runServer.constants';
import {
  type RunServerModel,
  type RunServerParamsModel,
} from '#tool-task/platform/server/utils/runServer/runServer.models';

export const runServer = async ({
  isOpen = true,
  path,
  port,
  root,
}: RunServerParamsModel): Promise<RunServerModel> =>
  command(
    fromExecutable(
      `http-server ${path} --cors --port ${port ?? STATIC_SERVER_PORT} ${isOpen ? '--o' : ''}`,
    ),
    { root },
  );
