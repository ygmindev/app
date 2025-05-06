import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { Redirect } from '@lib/frontend/route/components/Redirect/Redirect';
import { type RedirectPropsModel } from '@lib/frontend/route/components/Redirect/Redirect.models';

export const props: LibraryPropsModel<RedirectPropsModel<unknown>> = {
  Component: Redirect,
  defaultProps: {
    pathname: '',
  },
  variants: [],
};
