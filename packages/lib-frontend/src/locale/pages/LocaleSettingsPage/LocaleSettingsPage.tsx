import { type LFCModel } from '@lib-frontend/core/core.models';
import { MainLayout } from '@lib-frontend/core/layouts/MainLayout/MainLayout';
import { LOCALE_SETTINGS_PAGE_FIELDS } from '@lib-frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage.constants';
import { type LocaleSettingsPagePropsModel } from '@lib-frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage.models';
import { SettingsField } from '@lib-frontend/settings/components/SettingsField/SettingsField';
import { useLayoutStyles } from '@lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const LocaleSettingsPage: LFCModel<LocaleSettingsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      flex
      p
      s>
      {LOCALE_SETTINGS_PAGE_FIELDS.map(({ element, id, title }) => (
        <SettingsField
          element={element}
          id={id}
          key={id}
          title={title}
        />
      ))}
    </MainLayout>
  );
};
