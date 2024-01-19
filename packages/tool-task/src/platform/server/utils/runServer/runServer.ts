import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import {
  type RunServerModel,
  type RunServerParamsModel,
} from '@tool/task/platform/server/utils/runServer/runServer.models';

export const runServer = ({
  host = process.env.STATIC_HOST,
  isOpen = true,
  pathname,
  port = process.env.STATIC_PORT,
}: RunServerParamsModel): RunServerModel =>
  fromExecutable(
    `http-server ${pathname} -a ${host.split('://')[1]} --cors --port ${port} ${
      isOpen ? '--o' : ''
    }`,
  );
