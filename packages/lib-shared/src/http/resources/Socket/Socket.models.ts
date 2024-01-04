import { type CHAT_RESOURCE_NAME } from '#lib-shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type SocketModel = EmbeddedResourceModel & {
  [CHAT_RESOURCE_NAME]?: ChatModel;

  id: string;

  name?: string;
};

export type SocketFormModel = EntityResourceDataModel<SocketModel>;
