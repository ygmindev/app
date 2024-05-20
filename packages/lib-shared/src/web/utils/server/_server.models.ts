import { type ServerConfigModel } from '@lib/config/server/server.models';
import { type UriModel } from '@lib/shared/route/route.models';

export type _ServerParamsModel = UriModel &
  Pick<ServerConfigModel, 'certificate'> & {
    onError(error: Error): void;
    onStart(): void;
    root?: string;
  };

export type _ServerModel = void;
