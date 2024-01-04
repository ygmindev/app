import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { ChatService } from '#lib-backend/chat/resources/Chat/ChatService/ChatService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { SESSION_RESOURCE_NAME } from '#lib-shared/chat/resources/Session/Session.constants';
import {
type  SessionFormModel,
  SessionModel,
} from '#lib-shared/chat/resources/Session/Session.models';
import { type SessionServiceModel } from '#lib-shared/chat/resources/Session/SessionService/SessionService.models';
import { Session } from '#lib-backend/chat/resources/Session/Session';
import {
type  ChatFormModel,
  ChatModel,
} from '#lib-shared/chat/resources/Chat/Chat.models';

@withContainer()
export class SessionService
  extends createEmbeddedResourceService<
    SessionModel,
    SessionFormModel,
    ChatModel,
    ChatFormModel,
  >({
    Resource: Session,
    RootService: ChatService,
    name: SESSION_RESOURCE_NAME,
  })
  implements SessionServiceModel {}
