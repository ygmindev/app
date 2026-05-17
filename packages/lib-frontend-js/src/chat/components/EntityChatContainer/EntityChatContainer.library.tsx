import { EntityChatContainer } from '@lib/frontend/chat/components/EntityChatContainer/EntityChatContainer';
import { type EntityChatContainerPropsModel } from '@lib/frontend/chat/components/EntityChatContainer/EntityChatContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { FIXTURES as CHAT_FIXTURES } from '@lib/model/chat/Chat/Chat.fixtures';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';

export const props: LibraryPropsModel<EntityChatContainerPropsModel> = {
  Component: EntityChatContainer,
  defaultProps: {
    chat: CHAT_FIXTURES[0],
    currentUser: USER_FIXTURE,
  },
  variants: [],
};
