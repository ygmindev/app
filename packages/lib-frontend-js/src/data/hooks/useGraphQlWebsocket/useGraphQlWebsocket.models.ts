import {
  type _UseGraphQlWebsocketModel,
  type _UseGraphQlWebsocketParamsModel,
} from '@lib/frontend/data/hooks/useGraphQlWebsocket/_useGraphQlWebsocket.models';

export type UseGraphQlWebsocketParamsModel = Omit<
  _UseGraphQlWebsocketParamsModel,
  'connectionParams'
>;

export type UseGraphQlWebsocketModel = _UseGraphQlWebsocketModel;
