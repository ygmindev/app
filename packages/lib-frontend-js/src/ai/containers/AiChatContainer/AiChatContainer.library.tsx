import { AiChatContainer } from '@lib/frontend/ai/containers/AiChatContainer/AiChatContainer';
import { type AiChatContainerPropsModel } from '@lib/frontend/ai/containers/AiChatContainer/AiChatContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<AiChatContainerPropsModel> = {
  Component: AiChatContainer,
  defaultProps: {},
  variants: [],
};
