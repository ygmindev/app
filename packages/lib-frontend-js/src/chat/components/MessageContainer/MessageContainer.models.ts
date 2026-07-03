import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type ReactNode } from 'react';

export type MessageContainerPropsModel = {
  bottomElement?: ReactNode;
  isOwn?: boolean;
  message: Partial<MessageModel>;
  tooltipElement?: ReactNode;
};
