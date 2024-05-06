import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { Redirect } from '@lib/frontend/route/components/Redirect/Redirect';
import { type RedirectPropsModel } from '@lib/frontend/route/components/Redirect/Redirect.models';

export const props: LibraryPropsModel<RedirectPropsModel> = {
  Component: Redirect,
  defaultProps: {},
  variants: [],
};
