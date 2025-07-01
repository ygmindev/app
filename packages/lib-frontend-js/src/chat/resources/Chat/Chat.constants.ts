import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export const CHAT_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }],
  name: CHAT_RESOURCE_NAME,
} satisfies ResourceParamsModel<ChatModel, UserModel>;
