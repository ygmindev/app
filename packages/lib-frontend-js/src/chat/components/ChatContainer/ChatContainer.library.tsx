import { ChatContainer } from '@lib/frontend/chat/components/ChatContainer/ChatContainer';
import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { MESSAGE_FIXTURES } from '@lib/model/chat/Message/Message.fixtures';

export const props: LibraryPropsModel<ChatContainerPropsModel> = {
  Component: ChatContainer,
  defaultProps: {
    messages: MESSAGE_FIXTURES,
  },
  variants: [],
};
