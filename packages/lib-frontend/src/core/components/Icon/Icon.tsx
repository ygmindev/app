import { forwardRef } from 'react';

import { type AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { _Icon } from '@lib/frontend/core/components/Icon/_Icon';
import { ICON_FONT_SIZE_OFFSET } from '@lib/frontend/core/components/Icon/Icon.constants';
import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RTFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

const AnimatableIcon = animatable({ Component: _Icon });

export const Icon: RTFCModel<AnimatableRefModel<TextStyleModel>, IconPropsModel> = forwardRef(
  ({ iconText, ...props }, ref) => {
    const { computedStyles, styles } = useStyles({
      props,
      stylers: [
        textStyler,
        (props, theme) => {
          const style = textStyler(props, theme);
          return {
            ...style,
            fontSize: style.fontSize ? style.fontSize + ICON_FONT_SIZE_OFFSET : style.fontSize,
          };
        },
      ],
    });

    const Component = props.animation ? AnimatableIcon : _Icon;
    return iconText ? (
      <Wrapper style={styles}>
        <Component
          {...props}
          ref={ref}
          style={computedStyles}
        />

        <TranslatableText
          {...props}
          fontSize={THEME_SIZE_MORE.XSMALL}>
          {iconText}
        </TranslatableText>
      </Wrapper>
    ) : (
      <Component
        {...props}
        ref={ref}
        style={styles}
      />
    );
  },
);
