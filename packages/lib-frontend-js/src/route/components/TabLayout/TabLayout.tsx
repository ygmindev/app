import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type TabLayoutPropsModel } from '@lib/frontend/route/components/TabLayout/TabLayout.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const TabLayout: LFCModel<TabLayoutPropsModel> = ({ children, route, type, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { isActive, push } = useRouter();

  const activeChild = route?.routes?.find(
    ({ fullpath, isNavigatable = true, pathname }) =>
      isNavigatable && isActive({ isExact: false, pathname: fullpath ?? pathname }),
  );

  return (
    <MainLayout
      {...wrapperProps}
      flex
      isFullHeight
      s>
      {route?.title && <AsyncText fontStyle={FONT_STYLE.HEADLINE}>{route.title}</AsyncText>}

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
    </MainLayout>
  );
};
