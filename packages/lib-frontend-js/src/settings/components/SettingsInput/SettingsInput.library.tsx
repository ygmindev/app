import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { SettingsInput } from '@lib/frontend/settings/components/SettingsInput/SettingsInput';
import { type SettingsInputPropsModel } from '@lib/frontend/settings/components/SettingsInput/SettingsInput.models';

export const props: LibraryPropsModel<SettingsInputPropsModel> = {
  Component: SettingsInput,
  defaultProps: {
    element: <></>,
    id: 'app.dimension.height',
    title: '',
  },
  variants: [],
};
