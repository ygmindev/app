import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type ReactNode } from 'react';

export type MessageContainerPropsModel = {
  bottomElement?: ReactNode;
  isOwn?: boolean;
  message: Partial<MessageModel>;
  tooltipElement?: ReactNode;
};

export type MessageContainerRefModel = WrapperRefModel;
