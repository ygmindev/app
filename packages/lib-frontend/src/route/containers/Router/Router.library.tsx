import { Router } from '@lib/frontend/route/containers/Router/Router';
import { type RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<RouterPropsModel> = {
  Component: Router,
  defaultProps: {},
  variants: [],
};
