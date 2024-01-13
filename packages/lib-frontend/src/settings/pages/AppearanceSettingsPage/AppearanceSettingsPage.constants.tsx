import { type SettingsFieldPropsModel } from '@lib-frontend/settings/components/SettingsField/SettingsField.models';
import { BrightnessField } from '@lib-frontend/style/components/BrightnessField/BrightnessField';
import { STYLE } from '@lib-shared/style/style.constants';

export const APPEARANCE_SETTINGS_PAGE_FIELDS = [
  {
    element: <BrightnessField />,
    id: `${STYLE}.brightness`,
    title: ({ t }) => t('style:brightness'),
  },
] satisfies Array<SettingsFieldPropsModel>;
