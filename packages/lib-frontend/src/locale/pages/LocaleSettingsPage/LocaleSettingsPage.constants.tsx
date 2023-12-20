import { LanguageField } from '#lib-frontend/locale/components/LanguageField/LanguageField';
import { TimezoneField } from '#lib-frontend/locale/components/TimezoneField/TimezoneField';
import { type SettingsFieldPropsModel } from '#lib-frontend/settings/components/SettingsField/SettingsField.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const LOCALE_SETTINGS_PAGE_FIELDS = [
  {
    element: <TimezoneField />,
    id: `${LOCALE}.timezone`,
    title: ({ t }) => t('locale:timezone'),
  },
  {
    element: <LanguageField />,
    id: `${LOCALE}.language`,
    title: ({ t }) => t('locale:language'),
  },
] satisfies Array<SettingsFieldPropsModel>;
