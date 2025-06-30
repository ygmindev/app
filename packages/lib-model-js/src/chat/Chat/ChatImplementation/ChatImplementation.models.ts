import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type RelatedResourceImplementationModel } from '@lib/model/resource/RelatedResource/RelatedResourceImplementation/RelatedResourceImplementation.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type ChatImplementationModel = RelatedResourceImplementationModel<ChatModel, UserModel>;
