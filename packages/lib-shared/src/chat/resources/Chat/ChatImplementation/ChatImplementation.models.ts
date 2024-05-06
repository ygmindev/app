import { type ChatFormModel, type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type ChatImplementationModel = EntityResourceImplementationModel<ChatModel, ChatFormModel>;
