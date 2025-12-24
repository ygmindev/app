import { type UriModel } from '@lib/shared/route/route.models';

export type _UseSseParamsModel = {
  closeEvents?: Array<string>;
  handlers?: Record<string, (data: never) => void>;
  uri: UriModel;
  onError?(error: Error): void;
};

export type _UseSseModel = {
  isOpen?: boolean;
};
