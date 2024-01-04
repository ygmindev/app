import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import {
type  SessionFormModel,
  SessionModel,
} from '#lib-shared/chat/resources/Session/Session.models';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';

export type SessionServiceModel = EmbeddedResourceServiceModel<
    SessionModel,
    SessionFormModel,
    ChatModel,
  >;
