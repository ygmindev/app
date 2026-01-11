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
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppToolbar: LFCModel<AppToolbarPropsModel> = ({ routes, ...props }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { push } = useRouter();
  const { wrapperProps } = useLayoutStyles({ props });
  const [isMinimized, isMinimizedSet] = useStore('app.layout.isMinimized');
  const elementState = isMinimized ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE;

  const getRoutes = (value?: Array<RouteModel>): Array<RouteModel> =>
    value?.reduce(
      (result, v) =>
        v.isNavigatable ? [...result, { ...v, routes: getRoutes(v.routes) }] : result,
      [] as Array<RouteModel>,
    ) ?? [];

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
              isVerticalScrollable
              s={THEME_SIZE.SMALL}>
              {getRoutes(routes).map((v) => (
                <Button
                  fontAlign={FONT_ALIGN.LEFT}
                  icon={v.icon}
                  key={v.fullpath}
                  onPress={() => push({ pathname: v.fullpath ?? v.pathname })}
                  type={BUTTON_TYPE.INVISIBLE}>
                  {v.title}
                </Button>
              ))}
            </Wrapper>
          </Wrapper>

          <AppMenuButton />
        </Wrapper>
      )}
    </Activatable>
  );
};
