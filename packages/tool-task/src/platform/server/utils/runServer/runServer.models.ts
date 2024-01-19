import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type RunServerParamsModel = Omit<UriParamsModel, 'params'> & {
  isOpen?: boolean;
};

export type RunServerModel = string;
