import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import {
type  SocketFormModel,
  SocketModel,
} from '#lib-shared/http/resources/Socket/Socket.models';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';

export type SocketServiceModel = EmbeddedResourceServiceModel<
    SocketModel,
    SocketFormModel,
    ChatModel,
  >;
