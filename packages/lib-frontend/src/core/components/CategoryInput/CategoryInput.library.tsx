import { CategoryInput } from '@lib/frontend/core/components/CategoryInput/CategoryInput';
import { type CategoryInputPropsModel } from '@lib/frontend/core/components/CategoryInput/CategoryInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<CategoryInputPropsModel> = {
  Component: CategoryInput,
  defaultProps: {},
  variants: [],
};
