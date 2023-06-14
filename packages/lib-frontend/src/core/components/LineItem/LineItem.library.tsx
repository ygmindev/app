import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import type { LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import type { LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<LineItemPropsModel> = {
  Component: LineItem,
  defaultProps: {},
  variants: [],
};
