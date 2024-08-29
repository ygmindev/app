import { type SettingsInputPropsModel } from '@lib/frontend/settings/components/SettingsInput/SettingsInput.models';
import { BrightnessInput } from '@lib/frontend/style/components/BrightnessInput/BrightnessInput';
import { STYLE } from '@lib/shared/style/style.constants';

export const APPEARANCE_SETTINGS_PAGE_FIELDS = [
  {
    element: <BrightnessInput />,
    id: `${STYLE}.brightness`,
    title: ({ t }) => t('style:brightness'),
  },
] satisfies Array<SettingsInputPropsModel>;
