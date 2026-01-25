import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { KfnEventsPage } from '@lib/frontend/kfn/pages/KfnEventsPage/KfnEventsPage';
import { type KfnEventsPagePropsModel } from '@lib/frontend/kfn/pages/KfnEventsPage/KfnEventsPage.models';

export const props: LibraryPropsModel<KfnEventsPagePropsModel> = {
  defaultProps: {},
  Component: KfnEventsPage,
  variants: [],
};
