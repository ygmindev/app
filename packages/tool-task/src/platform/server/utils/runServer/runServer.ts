import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import {
  type RunServerModel,
  type RunServerParamsModel,
} from '@tool/task/platform/server/utils/runServer/runServer.models';

export const runServer = ({
  host = process.env.SERVER_APP_STATIC_HOST,
  isOpen = true,
  pathname,
  port = process.env.SERVER_APP_STATIC_PORT,
}: RunServerParamsModel): RunServerModel =>
  fromExecutable(
    `http-server ${pathname} -a ${host.split('://')[1]} --cors --port ${port} ${
      isOpen ? '--o' : ''
    }`,
  );
