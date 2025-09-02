import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type ChatImplementationModel = EmbeddedResourceImplementationModel<ChatModel, UserModel>;
