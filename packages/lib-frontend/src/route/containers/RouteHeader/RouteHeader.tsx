import { ANIMATION_STATES_APPEARABLE } from '@lib/frontend/animation/animation.constants';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type RouteHeaderPropsModel } from '@lib/frontend/route/containers/RouteHeader/RouteHeader.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useRef } from 'react';

export const RouteHeader: SFCModel<RouteHeaderPropsModel> = ({ route, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { getPath, location, push } = useRouter();
  const previous = route.header?.previous;
  const ref = useRef<WrapperRefModel>(null);
  const [isLoading] = useStore('app.isLoading');
  return (
    <Wrapper
      {...wrapperProps}
      animation={{ duration: theme.animation.transition, states: ANIMATION_STATES_APPEARABLE }}
      backgroundColor={THEME_COLOR_MORE.SURFACE}
      border={DIRECTION.BOTTOM}
      elementState={ELEMENT_STATE.ACTIVE}
      height={theme.layout.header.height}
      isAlign
      isFullWidth
      isRow
      pHorizontal
      position={SHAPE_POSITION.RELATIVE}
      ref={ref}>
      {!!previous && (
        <Button
          elementState={isLoading ? ELEMENT_STATE.DISABLED : undefined}
          icon="chevronLeft"
          onPress={async () => {
            ref.current?.toState(ELEMENT_STATE.INACTIVE);
            const pathnames = location.pathname.split('/');
            pathnames.splice(pathnames.length - previous, previous);
            return push({ isBack: true, pathname: getPath(pathnames.join('/'), location.params) });
          }}
          type={BUTTON_TYPE.INVISIBLE}
        />
      )}

      <Appearable isActive={!!route.title}>
        <Text fontStyle={FONT_STYLE.SUBTITLE}>{t(route.title)}</Text>
      </Appearable>
    </Wrapper>
  );
};
