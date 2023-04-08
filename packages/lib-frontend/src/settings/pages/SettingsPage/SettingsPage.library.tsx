import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { SettingsPage } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage';
import type { SettingsPagePropsModel } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage.models';

export const props: LibraryPropsModel<SettingsPagePropsModel> = {
  defaultProps: {},
  Component: SettingsPage,
  variants: [],
};
