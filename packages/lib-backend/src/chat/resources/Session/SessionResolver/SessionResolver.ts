import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Session } from '#lib-backend/chat/resources/Session/Session';
import { type SessionResolverModel } from '#lib-backend/chat/resources/Session/SessionResolver/SessionResolver.models';
import { SessionService } from '#lib-backend/chat/resources/Session/SessionService/SessionService';
import { Chat } from '#lib-backend/chat/resources/Chat/Chat';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { SESSION_RESOURCE_NAME } from '#lib-shared/chat/resources/Session/Session.constants';
import {
  type SessionFormModel,
  type SessionModel,
} from '#lib-shared/chat/resources/Session/Session.models';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';

@withContainer()
@withResolver({ Resource: () => Session })
export class SessionResolver
  extends createEmbeddedResourceResolver<SessionModel, SessionFormModel, ChatModel>({
    Resource: () => Session,
    ResourceService: SessionService,
    RootResource: () => Chat,
    name: SESSION_RESOURCE_NAME,
  })
  implements SessionResolverModel {}
