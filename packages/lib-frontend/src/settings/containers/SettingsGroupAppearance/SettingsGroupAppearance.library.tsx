import { SettingsGroupAppearance } from '@lib/frontend/settings/containers/SettingsGroupAppearance/SettingsGroupAppearance';
import type { SettingsGroupAppearancePropsModel } from '@lib/frontend/settings/containers/SettingsGroupAppearance/SettingsGroupAppearance.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SettingsGroupAppearancePropsModel> = {
  Component: SettingsGroupAppearance,
  defaultProps: {},
  variants: [],
};
