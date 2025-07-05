import { ANIMATION_STATES_APPEARABLE } from '@lib/frontend/animation/animation.constants';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { type NavigationHeaderPropsModel } from '@lib/frontend/app/components/NavigationHeader/NavigationHeader.models';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
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
  const { t } = useTranslation();
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
      pVertical={THEME_SIZE.SMALL}
      position={SHAPE_POSITION.RELATIVE}
      ref={ref}>
      <Appearable
        isActive={!!onBack}
        left={0}
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        top={0}
        zIndex>
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
        {isAsyncText(title) ? (
          <AsyncText
            align={FONT_ALIGN.CENTER}
            fontStyle={FONT_STYLE.SUBTITLE}>
            {title}
          </AsyncText>
        ) : (
          title
        )}
      </Appearable>
    </Wrapper>
  );
};
