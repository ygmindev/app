import { SESSION_FIELDS } from '#lib-frontend/chat/hooks/useSessionResource/useSessionResource.constants';
import { type UseSessionResourceModel } from '#lib-frontend/chat/hooks/useSessionResource/useSessionResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { CHAT_RESOURCE_NAME } from '#lib-shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import { SESSION_RESOURCE_NAME } from '#lib-shared/chat/resources/Session/Session.constants';
import {
  type SessionFormModel,
  type SessionModel,
} from '#lib-shared/chat/resources/Session/Session.models';

export const useSessionResource = (): UseSessionResourceModel =>
  useResource<SessionModel, SessionFormModel, ChatModel>({
    fields: [{ result: SESSION_FIELDS }],
    name: SESSION_RESOURCE_NAME,
    root: CHAT_RESOURCE_NAME,
  });
