import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { _Icon } from '@lib/frontend/core/components/Icon/_Icon';
import { ICON_FONT_SIZE_OFFSET } from '@lib/frontend/core/components/Icon/Icon.constants';
import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';

const _AnimatableIcon = animatable({ Component: _Icon });

export const Icon: SFCModel<IconPropsModel> = ({ iconText, ...props }) => {
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
  const Component = props.animation ? _AnimatableIcon : _Icon;
  return iconText ? (
    <Wrapper style={styles}>
      <Component
        {...props}
        style={computedStyles}
      />

      <AsyncText
        {...props}
        fontSize={THEME_SIZE_MORE.XSMALL}>
        {iconText}
      </AsyncText>
    </Wrapper>
  ) : (
    <Component
      {...props}
      style={styles}
    />
  );
};
