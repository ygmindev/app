import { View } from '@lib/frontend/core/components/View/View';
import type { ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ViewPropsModel> = {
  Component: View,
  defaultProps: {},
  variants: [],
};
