import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type TabLayoutPropsModel } from '@lib/frontend/route/components/TabLayout/TabLayout.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import {
  defaultHashRouteWhenBaseOnly,
  pickBestHashRouteMatch,
} from '@lib/frontend/route/utils/matchesHashRoute/matchesHashRoute';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const TabLayout: LFCModel<TabLayoutPropsModel> = ({ children, route, type, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { isActive, location, push } = useRouter();

  const navigatableRoutes = route?.routes?.filter(({ isNavigatable = true }) => isNavigatable);

  const activeChild = route?.pathname?.startsWith('#')
    ? pickBestHashRouteMatch(location.params?.hash, navigatableRoutes ?? []) ??
      defaultHashRouteWhenBaseOnly(
        location.params?.hash,
        route.pathname ?? '',
        navigatableRoutes ?? [],
      )
    : navigatableRoutes?.find(({ fullpath, pathname }) =>
        isActive({ pathname: fullpath ?? pathname }),
      );

  return (
    <Wrapper
      {...wrapperProps}
      flex
      s>
      <Tabs
        onChange={(pathname) => {
          void push({ pathname });
        }}
        tabs={filterNil(
          route?.routes?.map(
            ({ fullpath, icon, isNavigatable = true, pathname, title }) =>
              isNavigatable && {
                icon,
                id: fullpath ?? pathname,
                label: title ? t(title) : pathname,
              },
          ),
        )}
        type={type}
        value={activeChild?.fullpath}
      />

      <Wrapper
        flex
        position={SHAPE_POSITION.RELATIVE}>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
