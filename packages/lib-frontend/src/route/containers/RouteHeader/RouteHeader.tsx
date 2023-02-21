import { ANIMATION_STATES_APPEARABLE } from '@lib/frontend/animation/animation.constants';
import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
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
import {
  FONT_CASING,
  FONT_TYPE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useRef } from 'react';

export const RouteHeader: SFCModel<RouteHeaderPropsModel> = ({ route, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { push } = useRouter();
  const _previous = route.header?.previous;
  const ref = useRef<AnimatableRefModel>(null);
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
      {_previous && (
        <Button
          icon="chevronLeft"
          onPress={() => {
            ref.current?.toState(ELEMENT_STATE.INACTIVE);
            push({ pathname: _previous });
          }}
          type={BUTTON_TYPE.TRANSPARENT}
        />
      )}

      {route.title && (
        <TranslatableText
          casing={FONT_CASING.CAPITALIZE}
          type={FONT_TYPE.SUBTITLE}>
          {route.title}
        </TranslatableText>
      )}
    </Wrapper>
  );
};
