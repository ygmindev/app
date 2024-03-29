import { ANIMATION_STATES_APPEARABLE } from '@lib/frontend/animation/animation.constants';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { type NavigationHeaderPropsModel } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '@lib/frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useRef } from 'react';

export const NavigationHeader: LFCModel<NavigationHeaderPropsModel> = ({
  elementState,
  onBack,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const ref = useRef<WrapperRefModel>(null);
  const [isLoading] = useStore('app.isLoading');
  return (
    <Wrapper
      {...wrapperProps}
      animation={{ duration: theme.animation.transition, states: ANIMATION_STATES_APPEARABLE }}
      backgroundColor={THEME_COLOR_MORE.SURFACE}
      elementState={elementState}
      height={theme.layout.header.height}
      isAlign
      isFullWidth
      isRow
      pHorizontal
      position={SHAPE_POSITION.RELATIVE}
      ref={ref}>
      <Appearable isActive={!!onBack}>
        <Button
          elementState={isLoading ? ELEMENT_STATE.DISABLED : undefined}
          icon="chevronLeft"
          onPress={onBack}
          type={BUTTON_TYPE.INVISIBLE}
        />
      </Appearable>

      <Appearable
        flex
        isActive={!!title}>
        {isTranslatableText(title) ? (
          <TranslatableText fontStyle={FONT_STYLE.SUBTITLE}>{title}</TranslatableText>
        ) : (
          title
        )}
      </Appearable>
    </Wrapper>
  );
};
