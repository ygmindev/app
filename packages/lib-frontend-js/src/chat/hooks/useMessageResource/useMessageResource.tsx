import { MESSAGE_FIELDS } from '@lib/frontend/chat/hooks/useMessageResource/useMessageResource.constants';
import { type UseMessageResourceModel } from '@lib/frontend/chat/hooks/useMessageResource/useMessageResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import {
  type MessageFormModel,
  type MessageModel,
} from '@lib/shared/chat/resources/Message/Message.models';

export const useMessageResource = (): UseMessageResourceModel =>
  useResource<MessageModel, MessageFormModel>({
    fields: [{ result: MESSAGE_FIELDS }],
    name: MESSAGE_RESOURCE_NAME,
  });
