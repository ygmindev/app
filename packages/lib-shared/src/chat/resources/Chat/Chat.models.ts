import { type SOCKET_RESOURCE_NAME } from '#lib-shared/http/resources/Socket/Socket.constants';
import { type SocketModel } from '#lib-shared/http/resources/Socket/Socket.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type ChatModel = EntityResourceModel & {
  [SOCKET_RESOURCE_NAME]?: Array<SocketModel>;

  name?: string;
};

export type ChatFormModel = EntityResourceDataModel<ChatModel>;
