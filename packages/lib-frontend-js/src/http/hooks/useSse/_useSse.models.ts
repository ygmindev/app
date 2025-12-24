import { type UriModel } from '@lib/shared/route/route.models';

export type _UseSseParamsModel = {
  handlers?: Record<string, (data: never, handleClose: () => void) => void>;
  uri: UriModel;
  onError?(error: Error): void;
};

export type _UseSseModel = {
  isOpen?: boolean;
};
