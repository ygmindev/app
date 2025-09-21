import { ChatContainer } from '@lib/frontend/chat/components/ChatContainer/ChatContainer';
import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { MESSAGE_FIXTURES } from '@lib/model/chat/Message/Message.fixtures';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';

export const props: LibraryPropsModel<ChatContainerPropsModel> = {
  Component: ChatContainer,
  defaultProps: {
    currentUser: USER_FIXTURE,
    messages: MESSAGE_FIXTURES,
  },
  variants: [],
};
