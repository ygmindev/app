import { useRef } from 'react';

import { ANIMATION_STATES_APPEARABLE } from '#lib-frontend/animation/animation.constants';
import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import type { RouteHeaderPropsModel } from '#lib-frontend/route/containers/RouteHeader/RouteHeader.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { BORDER_DIRECTION } from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const RouteHeader: SFCModel<RouteHeaderPropsModel> = ({ route, testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { location, push } = useRouter();
  const previous = route.header?.previous;
  const ref = useRef<WrapperRefModel>(null);
  const isLoading = useStore((state) => state.app.isLoading);
  return (
    <Wrapper
      animation={{ duration: theme.animation.transition, states: ANIMATION_STATES_APPEARABLE }}
      backgroundColor={THEME_COLOR.NEUTRAL}
      border={BORDER_DIRECTION.BOTTOM}
      elementState={ELEMENT_STATE.ACTIVE}
      height={theme.layout.header.height}
      isFullWidth
      isRowAlign
      pHorizontal
      position={SHAPE_POSITION.RELATIVE}
      ref={ref}
      spacing
      style={styles}
      testID={testID}>
      {previous && (
        <Button
          elementState={isLoading ? ELEMENT_STATE.DISABLED : undefined}
          icon="chevronLeft"
          onPress={() => {
            ref.current?.toState(ELEMENT_STATE.INACTIVE);
            push({ isBack: true, pathname: previous });
          }}
          type={BUTTON_TYPE.INVISIBLE}
        />
      )}

      <Appearable isVisible={!!(location.params?.title || route.title)}>
        <Text type={FONT_TYPE.SUBTITLE}>{t(location.params?.title || route.title)}</Text>
      </Appearable>
    </Wrapper>
  );
};
