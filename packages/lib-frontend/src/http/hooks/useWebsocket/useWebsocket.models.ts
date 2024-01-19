import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '@lib/frontend/http/hooks/useWebsocket/_useWebsocket.models';

export type UseWebsocketParamsModel<TType = unknown> = Omit<
  _UseWebsocketParamsModel<TType>,
  'url'
> & {
  isCredentials?: boolean;
};

export type UseWebsocketModel<TType = unknown> = _UseWebsocketModel<TType>;
