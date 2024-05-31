import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import {
  type StaticServerModel,
  type StaticServerParamsModel,
} from '@tool/task/server/utils/staticServer/staticServer.models';

export const staticServer = ({
  host = process.env.SERVER_APP_STATIC_HOST,
  isOpen = true,
  pathname,
  port = process.env.SERVER_APP_STATIC_PORT,
}: StaticServerParamsModel): StaticServerModel =>
  fromExecutable(
    `http-server ${pathname} ${host ? `-a ${host.split('://')[1]}` : ''} --cors --port ${port} ${
      isOpen ? '--o' : ''
    }`,
  );
