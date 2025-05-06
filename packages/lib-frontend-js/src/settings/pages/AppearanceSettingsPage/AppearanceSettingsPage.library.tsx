import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { AppearanceSettingsPage } from '@lib/frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage';
import { type AppearanceSettingsPagePropsModel } from '@lib/frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage.models';

export const props: LibraryPropsModel<AppearanceSettingsPagePropsModel> = {
  Component: AppearanceSettingsPage,
  defaultProps: {},
  variants: [],
};
