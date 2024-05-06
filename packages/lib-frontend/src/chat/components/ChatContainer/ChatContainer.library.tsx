import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { ChatContainer } from '@lib/frontend/chat/components/ChatContainer/ChatContainer';
import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';

export const props: LibraryPropsModel<ChatContainerPropsModel> = {
  Component: ChatContainer,
  defaultProps: {},
  variants: [],
};
