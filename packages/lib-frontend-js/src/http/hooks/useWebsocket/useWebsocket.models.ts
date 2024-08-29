import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '@lib/frontend/http/hooks/useWebsocket/_useWebsocket.models';

export type UseWebsocketParamsModel<TType = unknown> = _UseWebsocketParamsModel<TType> & {
  isCredentials?: boolean;
};

export type UseWebsocketModel<TType = unknown> = _UseWebsocketModel<TType>;
