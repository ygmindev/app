import { CategoryInput } from '@lib/frontend/core/components/CategoryInput/CategoryInput';
import { type ItemInputPropsModel } from '@lib/frontend/core/components/CategoryInput/CategoryInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ItemInputPropsModel> = {
  Component: CategoryInput,
  defaultProps: {},
  variants: [],
};
