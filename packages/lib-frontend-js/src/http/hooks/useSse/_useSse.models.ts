import { type UriModel } from '@lib/shared/route/route.models';

export type _UseSseParamsModel = {
  handlers?: Record<string, (data: never, onClose: () => void) => void>;
  isActive?: boolean;
  uri: UriModel;
  onError?(error: Error): void;
};

export type _UseSseModel = {
  isOpen?: boolean;
  subscribe(): void;
  unsubscribe(): void;
};
