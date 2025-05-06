import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { type RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';

export const props: LibraryPropsModel<RouterPropsModel> = {
  Component: Router,
  defaultProps: {
    routes: [],
  },
  variants: [],
};
