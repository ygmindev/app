import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type MessageImplementationModel = EntityResourceImplementationModel<MessageModel>;
