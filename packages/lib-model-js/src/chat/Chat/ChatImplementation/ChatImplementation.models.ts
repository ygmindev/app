import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type ChatImplementationModel = EntityResourceImplementationModel<ChatModel>;
