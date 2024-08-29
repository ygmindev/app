import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { NavigationHeader } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader';
import { type NavigationHeaderPropsModel } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader.models';

export const props: LibraryPropsModel<NavigationHeaderPropsModel> = {
  Component: NavigationHeader,
  defaultProps: {},
  variants: [],
};
