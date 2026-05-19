import { AiChatForm } from '@lib/frontend/ai/components/AiChatForm/AiChatForm';
import { type AiChatFormPropsModel } from '@lib/frontend/ai/components/AiChatForm/AiChatForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<AiChatFormPropsModel> = {
  Component: AiChatForm,
  defaultProps: {},
  variants: [],
};
