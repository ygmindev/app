import { type _WebConfigModel } from '@lib/config/web/web.models';
import { type UriModel } from '@lib/shared/route/route.models';

export type _ServerParamsModel = UriModel & {
  config: _WebConfigModel;
  onError(error: Error): void;
  onStart(): void;
  root?: string;
};

export type _ServerModel = void;
