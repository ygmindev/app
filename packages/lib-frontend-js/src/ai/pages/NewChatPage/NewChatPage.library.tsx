import { NewChatPage } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage';
import { type NewChatPagePropsModel } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<NewChatPagePropsModel> = {
  Component: NewChatPage,
  defaultProps: {},
  variants: [],
};
