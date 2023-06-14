import { SettingsPage } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage';
import type { SettingsPagePropsModel } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.models';
import type { LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SettingsPagePropsModel> = {
  Component: SettingsPage,
  defaultProps: {},
  variants: [],
};
