import { ANIMATION_STATES_APPEARABLE } from '@lib/frontend/animation/animation.constants';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import type { RouteHeaderPropsModel } from '@lib/frontend/route/containers/RouteHeader/RouteHeader.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const RouteHeader: SFCModel<RouteHeaderPropsModel> = ({
  isVisible,
  route,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { back, push } = useRouter();
  return (
    <Wrapper
      animation={{ duration: theme.animation.transition, states: ANIMATION_STATES_APPEARABLE }}
      backgroundColor={THEME_COLOR.NEUTRAL}
      border={BORDER_DIRECTION.BOTTOM}
      elementState={isVisible ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE}
      height={theme.layout.header.height}
      isFullWidth
      isRowAlign
      justify={FLEX_JUSTIFY.SPACE_BETWEEN}
      pHorizontal
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Button
        icon="chevronLeft"
        onPress={() =>
          route.header?.previous ? push({ pathname: route.header?.previous }) : back()
        }
        type={BUTTON_TYPE.TRANSPARENT}
      />

      {route.title && <TranslatableText>{route.title}</TranslatableText>}
    </Wrapper>
  );
};
