import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { NewChatPage } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage';
import { type NewChatPagePropsModel } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage.models';

export const props: LibraryPropsModel<NewChatPagePropsModel> = {
  defaultProps: {},
  Component: NewChatPage,
  variants: [],
};
