import { type FileConfigModel } from '@lib/config/file/file.models';
import { type InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { type WebConfigModel } from '@lib/config/node/web/web.models';
import { type UriModel } from '@lib/shared/route/route.models';

export type _RunServerParamsModel = UriModel &
  Pick<ServerConfigModel, 'certificate'> &
  Pick<FileConfigModel, 'publicDir'> & {
    internationalize: InternationalizeConfigModel;
    onStart(): void;
    root?: string;
    web: WebConfigModel;
  };

export type _RunServerModel = void;
