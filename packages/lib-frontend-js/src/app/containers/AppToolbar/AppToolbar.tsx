import { Accordion } from '@lib/frontend/animation/components/Accordion/Accordion';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { AppMenuButton } from '@lib/frontend/app/containers/AppMenuButton/AppMenuButton';
import { type AppToolbarPropsModel } from '@lib/frontend/app/containers/AppToolbar/AppToolbar.models';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
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

  // const getRoutes = (value?: Array<RouteModel>): Array<RouteModel> => {
  //   const routesNavigatable =
  //     value?.reduce(
  //       (result, v) => [...result, ...(v.isNavigatable ? [v, ...getRoutes(v.routes)] : [])],
  //       [] as Array<RouteModel>,
  //     ) ?? [];
  //   if (!routesNavigatable.length) {
  //     return [];
  //   }
  //   const grouped = groupBy(routesNavigatable, (v) => v.category?.id ?? '');
  //   return reduce(
  //     grouped,
  //     (result, v, k) => {
  //       if (k) {
  //         const category = v?.[0]?.category;
  //         return [
  //           ...result,
  //           { icon: category?.icon, pathname: k, routes: v., title: category?.label },
  //         ];
  //       }
  //       return result;
  //     },
  //     [] as Array<RouteModel>,
  //   );
  // };

  const getRoutes = (value?: Array<RouteModel>): Array<RouteModel> =>
    value?.reduce(
      (result, v) =>
        v.isNavigatable ? [...result, { ...v, routes: getRoutes(v.routes) }] : result,
      [] as Array<RouteModel>,
    ) ?? [];

  // const getNavigationElement = (value?: Array<RouteModel>): ReactElement | null =>
  //   value?.length ? (
  //     <Wrapper>
  //       {getRoutes(value)?.map((v) =>
  //         v.routes ? (
  //           <Accordion
  //             icon={v.icon}
  //             isTransparent
  //             key={v.pathname}
  //             title={v.title}>
  //             {getNavigationElement(v.routes)}
  //           </Accordion>
  //         ) : (
  //           <AsyncText key={v.pathname}>{v.title}</AsyncText>
  //         ),
  //       )}
  //     </Wrapper>
  //   ) : null;

  const getNavigationElement = (value?: Array<RouteModel>): ReactElement | null => {
    const grouped = groupBy(getRoutes(value), (v) => v.category?.id ?? '');
    return (
      <Wrapper>
        {reduce(
          grouped,
          (result, v, k) => {
            if (k) {
              const category = v?.[0]?.category;
              return [
                ...result,
                <Accordion
                  icon={category?.icon}
                  isTransparent
                  key={category?.id}
                  title={category?.label}>
                  {/* {v.map((vv) =>
                    vv.routes ? (
                      getNavigationElement(vv.routes)
                    ) : (
                      <AsyncText key={vv.pathname}>{vv.title}</AsyncText>
                    ),
                  )} */}
                  {v.map((vv) => {
                    console.warn(vv);
                    return vv.routes ? (
                      getNavigationElement(vv.routes)
                    ) : (
                      <AsyncText key={vv.pathname}>{vv.title}</AsyncText>
                    );
                  })}
                </Accordion>,
              ];
            }
            return result;
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
          <Wrapper flex>
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
