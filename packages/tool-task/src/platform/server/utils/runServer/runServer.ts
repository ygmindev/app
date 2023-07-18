import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import {
  type RunServerModel,
  type RunServerParamsModel,
} from '#tool-task/platform/server/utils/runServer/runServer.models';

export const runServer = ({
  host = process.env.SERVER_HOST,
  isOpen = true,
  path,
  port = process.env.SERVER_PORT,
}: RunServerParamsModel): RunServerModel =>
  fromExecutable(`http-server ${path} -a ${host} --cors --port ${port} ${isOpen ? '--o' : ''}`);
