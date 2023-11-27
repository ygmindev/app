import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RouteGroup } from '#lib-frontend/route/components/RouteGroup/RouteGroup';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { ACCOUNT_GROUPS } from '#lib-frontend/user/pages/AccountPage/AccountPage.constants';
import { type AccountPagePropsModel } from '#lib-frontend/user/pages/AccountPage/AccountPage.models';

export const AccountPage: LFCModel<AccountPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      p>
      {ACCOUNT_GROUPS.map(({ id, root, routes, title }) => (
        <RouteGroup
          key={id}
          root={root}
          routes={routes}
          title={title}
        />
      ))}
    </MainLayout>
  );
};
