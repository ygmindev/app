import { SettingsInput } from '@lib/frontend/settings/components/SettingsInput/SettingsInput';
import { type SettingsInputPropsModel } from '@lib/frontend/settings/components/SettingsInput/SettingsInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SettingsInputPropsModel> = {
  Component: SettingsInput,
  defaultProps: {},
  variants: [],
};
