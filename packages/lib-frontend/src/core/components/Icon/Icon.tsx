import { forwardRef } from 'react';

import type { AnimatableRefModel } from '#lib-frontend/animation/animation.models';
import { animatable } from '#lib-frontend/animation/utils/animatable/animatable';
import { _Icon } from '#lib-frontend/core/components/Icon/_Icon';
import { ICON_FONT_SIZE_OFFSET } from '#lib-frontend/core/components/Icon/Icon.constants';
import type { IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import type { RSFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import type { TextStyleModel } from '#lib-frontend/style/style.models';
import { textStyler } from '#lib-frontend/style/utils/styler/textStyler/textStyler';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

const AnimatableIcon = animatable({ Component: _Icon });

export const Icon: RSFCModel<
  AnimatableRefModel<TextStyleModel>,
  IconPropsModel,
  TextStyleModel
> = forwardRef(({ ...props }, ref) => {
  const { styles } = useStyles({
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
  return (
    <Component
      {...props}
      ref={ref}
      style={styles}
    />
  );
});

process.env.APP_DEBUG && (Icon.displayName = variableName({ Icon }));
