import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RouteList } from '#lib-frontend/route/components/RouteList2/RouteList';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { SETTINGS_PAGE_ROUTES } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.constants';
import { type SettingsPagePropsModel } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const SettingsPage: LFCModel<SettingsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { location } = useRouter();
  return (
    <MainLayout
      {...wrapperProps}
      p>
      {SETTINGS_PAGE_ROUTES.map(({ pathname, routes, title }) => (
        <RouteList
          key={pathname}
          root={`${location.pathname}/${pathname}`}
          routes={routes}
          title={title}
        />
      ))}
    </MainLayout>
  );
};
