import {
  type MessageFormModel,
  type MessageModel,
} from '@lib/shared/chat/resources/Message/Message.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type MessageImplementationModel = EntityResourceImplementationModel<
  MessageModel,
  MessageFormModel
>;
