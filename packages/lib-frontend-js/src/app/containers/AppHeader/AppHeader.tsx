import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { type AppHeaderPropsModel } from '@lib/frontend/app/containers/AppHeader/AppHeader.models';
import { AppMenuButton } from '@lib/frontend/app/containers/AppMenuButton/AppMenuButton';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { RouteTabs } from '@lib/frontend/route/containers/RouteTabs/RouteTabs';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';

export const AppHeader: LFCModel<AppHeaderPropsModel> = ({ routes, ...props }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { push } = useRouter();
  const { wrapperProps } = useLayoutStyles({ props });

  const getRoutes = (value?: Array<RouteModel>): Array<RouteModel> =>
    value?.reduce(
      (result, v) =>
        v.isNavigatable ? [...result, { ...v, routes: getRoutes(v.routes) }] : result,
      [] as Array<RouteModel>,
    ) ?? [];

  return (
    <Wrapper
      {...wrapperProps}
      isFullWidth
      isRow>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/1024px-ChatGPT-Logo.svg.png?20240214002031" />

      <RouteTabs
        flex
        isCenter
        routes={routes ?? []}
      />

      <AppMenuButton isMinimized />
    </Wrapper>
  );
};
