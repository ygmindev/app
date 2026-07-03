import { SystemMessageContainer } from '@lib/frontend/ai/components/SystemMessageContainer/SystemMessageContainer';
import { type SystemMessageContainerPropsModel } from '@lib/frontend/ai/components/SystemMessageContainer/SystemMessageContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<SystemMessageContainerPropsModel> = {
  Component: SystemMessageContainer,
  defaultProps: {},
  variants: [],
};
