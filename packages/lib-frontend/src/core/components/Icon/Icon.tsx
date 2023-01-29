import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { _Icon } from '@lib/frontend/core/components/Icon/_Icon';
import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import { ICON_FONT_SIZE_OFFSET } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { TextStyleModel } from '@lib/frontend/style/style.models';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

const _AnimatableIcon = animatable({ Component: _Icon });

export const Icon = composeComponent<IconPropsModel, _IconPropsModel, TextStyleModel>({
  getComponent: ({ animation }) => (animation ? _AnimatableIcon : _Icon),

  getProps: ({ height, width, ...props }, theme) => ({
    backgroundColor: theme.colors.tone.neutral.muted,
    height: height || 0,
    width: width || 0,
    ...props,
  }),

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

process.env.APP_DEBUG && (Icon.displayName = variableName(() => Icon));
