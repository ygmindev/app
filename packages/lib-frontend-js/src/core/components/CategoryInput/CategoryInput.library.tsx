import { CategoryInput } from '@lib/frontend/core/components/CategoryInput/CategoryInput';
import { type CategoryInputPropsModel } from '@lib/frontend/core/components/CategoryInput/CategoryInput.models';
import { MENU_FIXTURE_OPTIONS } from '@lib/frontend/core/components/Menu/Menu.fixtures';
import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<CategoryInputPropsModel> = {
  Component: CategoryInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {
    defaultValue: '1',
    options: MENU_FIXTURE_OPTIONS,
  },
  variants: [],
};
