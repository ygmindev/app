import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { type RelatedResourceImplementationModel } from '@lib/shared/resource/resources/RelatedResource/RelatedResourceImplementation/RelatedResourceImplementation.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type ChatImplementationModel = RelatedResourceImplementationModel<ChatModel, UserModel>;
