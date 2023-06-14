import { SettingsLocale } from '#lib-frontend/settings/containers/SettingsLocale/SettingsLocale';
import type { SettingsLocalePropsModel } from '#lib-frontend/settings/containers/SettingsLocale/SettingsLocale.models';
import type { LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SettingsLocalePropsModel> = {
  Component: SettingsLocale,
  defaultProps: {},
  variants: [],
};
