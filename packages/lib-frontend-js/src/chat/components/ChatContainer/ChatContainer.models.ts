import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type ChatContainerPropsModel = {
  messages?: PartialArrayModel<MessageModel>;
};
