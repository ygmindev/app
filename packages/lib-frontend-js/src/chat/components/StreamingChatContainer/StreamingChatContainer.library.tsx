import { StreamingChatContainer } from '@lib/frontend/chat/components/StreamingChatContainer/StreamingChatContainer';
import { type StreamingChatContainerPropsModel } from '@lib/frontend/chat/components/StreamingChatContainer/StreamingChatContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<StreamingChatContainerPropsModel> = {
  Component: StreamingChatContainer,
  defaultProps: {},
  variants: [],
};
