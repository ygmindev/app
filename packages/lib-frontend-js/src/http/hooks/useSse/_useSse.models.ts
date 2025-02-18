import { type UriModel } from '@lib/shared/route/route.models';

export type _UseSseParamsModel = {
  onError?(error: Error): void;
  onMessage?<TType>(data: TType): void;
  uri(): Promise<UriModel>;
};

export type _UseSseModel = void;
