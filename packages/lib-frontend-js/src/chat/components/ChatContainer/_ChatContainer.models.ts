import { type ChatMessageModel } from '@lib/shared/chat/chat.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type ReactElement } from 'react';

export type _ChatContainerPropsModel = {
  backgroundColor: string;
  backgroundColorPrimary: string;
  backgroundColorSecondary: string;
  borderColor: string;
  borderRadius: number;
  colorPrimary: string;
  colorSecondary: string;
  currentUser: PartialModel<UserModel>;
  inputHeight: number;
  messages?: Array<ChatMessageModel>;
  onChange?(params: Array<ChatMessageModel>): void;
  placeholder: string;
  sendElement(props: { handleSend: (value?: string) => void; value?: string }): ReactElement;
  spacing: number;
};
