import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { AppMenuButton } from '@lib/frontend/app/containers/AppMenuButton/AppMenuButton';
import { type AppToolbarPropsModel } from '@lib/frontend/app/containers/AppToolbar/AppToolbar.models';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { RouteLink } from '@lib/frontend/route/components/RouteLink/RouteLink';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import reduce from 'lodash/reduce';
import { type ReactElement, useMemo } from 'react';

export const AppToolbar: LFCModel<AppToolbarPropsModel> = ({ routes, ...props }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const [isMinimized, isMinimizedSet] = useStore('app.layout.isMinimized');
  const elementState = isMinimized ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE;

  const getRoutes = (value?: Array<RouteModel>): Array<RouteModel> =>
    value?.reduce(
      (result, v) =>
        v.isNavigatable ? [...result, { ...v, routes: getRoutes(v.routes) }] : result,
      [] as Array<RouteModel>,
    ) ?? [];

  const getNavigationElement = (value?: Array<RouteModel>): ReactElement | null => {
    const grouped = groupBy(getRoutes(value), (v) => v.category?.id ?? '');
    return (
      <Wrapper>
        {reduce(
          grouped,
          (result, v, k) => {
            const category = v?.[0]?.category;
            return [
              ...result,
              ...(k
                ? [
                    <Accordion
                      icon={category?.icon}
                      isTransparent
                      key={category?.id}
                      title={category?.label}>
                      {v.map((vv) => getNavigationElement(vv.routes))}
                    </Accordion>,
                  ]
                : v.map((vv) => (
                    <RouteLink
                      key={vv.fullpath}
                      pathname={vv.fullpath ?? vv.pathname}>
                      {vv.title}
                    </RouteLink>
                  ))),
            ];
          },
          [] as Array<ReactElement>,
        )}
      </Wrapper>
    );
  };

  const navigationElement = useMemo(() => getNavigationElement(routes), [routes]);

  return (
    <Activatable>
      {(isActive) => (
        <Wrapper
          {...wrapperProps}
          animation={{
            states: {
              [ELEMENT_STATE.ACTIVE]: {
                width: theme.shape.size[THEME_SIZE.LARGE] + theme.shape.spacing[THEME_SIZE.MEDIUM],
              },
              [ELEMENT_STATE.INACTIVE]: { width: theme.layout.header.width },
            },
          }}
          border={DIRECTION.RIGHT}
          elementState={elementState}
          isOverflowHidden
          p
          position={SHAPE_POSITION.RELATIVE}
          s
          zIndex>
          <Wrapper
            basis={0}
            flex
            shrink>
            <Wrapper
              isAlign
              isRow
              position={SHAPE_POSITION.RELATIVE}>
              <Appearable
                backgroundColor={THEME_COLOR_MORE.SURFACE}
                height={theme.shape.size[THEME_SIZE.MEDIUM]}
                isActive={!isMinimized || !isActive}
                isCenter
                isLazy={false}
                isScalable={false}
                width={theme.shape.size[THEME_SIZE.MEDIUM]}
                zIndex>
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/1024px-ChatGPT-Logo.svg.png?20240214002031" />
              </Appearable>

              <Wrapper
                elementState={elementState}
                height={theme.shape.size[THEME_SIZE.MEDIUM]}
                position={SHAPE_POSITION.ABSOLUTE}
                right={0}
                top={0}
                width={theme.shape.size[THEME_SIZE.MEDIUM]}>
                <Button
                  icon={isMinimized ? 'sidebarMaximize' : 'sidebarMinimize'}
                  onPress={() => isMinimizedSet(!isMinimized)}
                  tooltip={isMinimized ? t('app:openSidebar') : t('app:closeSidebar')}
                  type={BUTTON_TYPE.INVISIBLE}
                />
              </Wrapper>
            </Wrapper>

            <Wrapper
              flex
              isVerticalScrollable>
              {navigationElement}
            </Wrapper>
          </Wrapper>

          <AppMenuButton />
        </Wrapper>
      )}
    </Activatable>
  );
};
