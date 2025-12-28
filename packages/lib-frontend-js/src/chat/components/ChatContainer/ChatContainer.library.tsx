import { ChatContainer } from '@lib/frontend/chat/components/ChatContainer/ChatContainer';
import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { FIXTURES as CHAT_FIXTURES } from '@lib/model/chat/Chat/Chat.fixtures';
import { FIXTURES as MESSAGE_FIXTURES } from '@lib/model/chat/Message/Message.fixtures';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';

export const props: LibraryPropsModel<ChatContainerPropsModel> = {
  Component: ChatContainer,
  defaultProps: {
    chat: CHAT_FIXTURES[0],
    currentUser: USER_FIXTURE,
    messages: MESSAGE_FIXTURES,
  },
  variants: [],
};
