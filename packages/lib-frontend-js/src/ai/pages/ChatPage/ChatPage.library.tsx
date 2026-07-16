import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ChatPage } from '@lib/frontend/ai/pages/ChatPage/ChatPage';
import { type ChatPagePropsModel } from '@lib/frontend/ai/pages/ChatPage/ChatPage.models';

export const props: LibraryPropsModel<ChatPagePropsModel> = {
  defaultProps: {},
  Component: ChatPage,
  variants: [],
};
