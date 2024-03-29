import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { LocaleSettingsPage } from '@lib/frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage';
import { type LocaleSettingsPagePropsModel } from '@lib/frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage.models';

export const props: LibraryPropsModel<LocaleSettingsPagePropsModel> = {
  defaultProps: {},
  Component: LocaleSettingsPage,
  variants: [],
};
