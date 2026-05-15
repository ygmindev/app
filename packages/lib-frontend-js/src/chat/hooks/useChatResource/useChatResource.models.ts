import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseChatResourceModel = UseResourceModel<ChatModel, UserModel>;
