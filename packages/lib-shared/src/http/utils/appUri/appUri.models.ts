import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export interface AppUriParamsModel extends Omit<UriParamsModel, 'host' | 'port'> {
  name?: string;
}
