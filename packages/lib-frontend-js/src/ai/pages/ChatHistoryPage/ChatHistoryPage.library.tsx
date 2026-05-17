import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ChatHistoryPage } from '@lib/frontend/ai/pages/ChatHistoryPage/ChatHistoryPage';
import { type ChatHistoryPagePropsModel } from '@lib/frontend/ai/pages/ChatHistoryPage/ChatHistoryPage.models';

export const props: LibraryPropsModel<ChatHistoryPagePropsModel> = {
  defaultProps: {},
  Component: ChatHistoryPage,
  variants: [],
};
