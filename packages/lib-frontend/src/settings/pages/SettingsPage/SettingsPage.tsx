import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RouteList } from '#lib-frontend/route/components/RouteList/RouteList';
import { SETTINGS_GROUPS } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.constants';
import { type SettingsPagePropsModel } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const SettingsPage: LFCModel<SettingsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout {...wrapperProps}>
      {SETTINGS_GROUPS.map(({ id, routes, title }) => (
        <RouteList
          key={id}
          root
          routes={routes}
          title={title}
        />
      ))}
    </MainLayout>
  );
};
