import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ChatFormPropsModel> = {
  Component: ChatForm,
  defaultProps: {},
  variants: [],
};
