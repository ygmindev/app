import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '#lib-frontend/http/hooks/useWebsocket/_useWebsocket.models';

export type UseWebsocketParamsModel = Omit<_UseWebsocketParamsModel, 'url'>;

export type UseWebsocketModel = _UseWebsocketModel;
