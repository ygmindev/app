import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { _AnimatableText } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText';
import type { AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { textParams } from '@lib/frontend/core/components/Text/Text';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { forwardRef } from 'react';

export const AnimatableText: RSFCModel<AnimatableRefModel, AnimatableTextPropsModel> = forwardRef(
  ({ ...props }, ref) => {
    const theme = useTheme();
    const { styles } = useStyles({ props, stylers: textParams.stylers });
    return (
      <_AnimatableText
        {...props}
        {...(textParams.getProps ? textParams.getProps(props, theme) : {})}
        ref={ref}
        style={styles}
      />
    );
  },
);
