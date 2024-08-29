import { LanguageInput } from '@lib/frontend/locale/components/LanguageInput/LanguageInput';
import { TimezoneInput } from '@lib/frontend/locale/components/TimezoneInput/TimezoneInput';
import { type SettingsInputPropsModel } from '@lib/frontend/settings/components/SettingsInput/SettingsInput.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';

export const LOCALE_SETTINGS_PAGE_FIELDS = [
  {
    element: <TimezoneInput />,
    id: `${LOCALE}.timezone`,
    title: ({ t }) => t('locale:timezone'),
  },
  {
    element: <LanguageInput />,
    id: `${LOCALE}.language`,
    title: ({ t }) => t('locale:language'),
  },
] satisfies Array<SettingsInputPropsModel>;
