import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';
import { SettingsField } from '@lib-frontend/settings/components/SettingsField/SettingsField';
import { type SettingsFieldPropsModel } from '@lib-frontend/settings/components/SettingsField/SettingsField.models';

export const props: LibraryPropsModel<SettingsFieldPropsModel> = {
  Component: SettingsField,
  defaultProps: {},
  variants: [],
};
