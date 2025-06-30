import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export const CHAT_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }],
  name: 'chats',
} satisfies ResourceParamsModel<ChatModel, UserModel>;
