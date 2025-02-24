import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/chat/resources/Utility/Utility.constants';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';

export const MESSAGE_RESOURCE_PARAMS = {
  fields: [],
  name: MESSAGE_RESOURCE_NAME,
} satisfies ResourceParamsModel<MessageModel>;
