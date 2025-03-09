import { type UseMessageResourceModel } from '@lib/frontend/chat/hooks/useMessageResource/useMessageResource.models';
import { MESSAGE_RESOURCE_PARAMS } from '@lib/frontend/chat/resources/Message/Message.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type MessageFormModel,
  type MessageModel,
} from '@lib/shared/chat/resources/Message/Message.models';

export const useMessageResource = (): UseMessageResourceModel =>
  useResource<MessageModel, MessageFormModel>({
    ...MESSAGE_RESOURCE_PARAMS,
  });
