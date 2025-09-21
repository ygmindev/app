import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { type MessageContainerPropsModel } from '@lib/frontend/chat/components/MessageContainer/MessageContainer.models';

export const props: LibraryPropsModel<MessageContainerPropsModel> = {
  Component: MessageContainer,
  defaultProps: {},
  variants: [],
};
