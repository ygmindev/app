import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { LOCALE_SETTINGS_PAGE_FIELDS } from '@lib/frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage.constants';
import { type LocaleSettingsPagePropsModel } from '@lib/frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage.models';
import { SettingsInput } from '@lib/frontend/settings/components/SettingsInput/SettingsInput';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const LocaleSettingsPage: LFCModel<LocaleSettingsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      s>
      {LOCALE_SETTINGS_PAGE_FIELDS.map(({ element, id, title }) => (
        <SettingsInput
          element={element}
          id={id}
          key={id}
          title={title}
        />
      ))}
    </MainLayout>
  );
};
