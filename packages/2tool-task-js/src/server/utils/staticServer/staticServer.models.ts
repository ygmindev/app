import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type StaticServerParamsModel = Omit<UriParamsModel, 'params'> & {
  isOpen?: boolean;
};

export type StaticServerModel = string;
