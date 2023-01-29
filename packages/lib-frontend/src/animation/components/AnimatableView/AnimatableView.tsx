import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { _AnimatableView } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView';
import type { AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/AnimatableView.models';
import { viewParams } from '@lib/frontend/core/components/View/View';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { forwardRef } from 'react';

export const AnimatableView: RSFCModel<AnimatableRefModel, AnimatableViewPropsModel> = forwardRef(
  ({ ...props }, ref) => {
    const theme = useTheme();
    const { styles } = useStyles({ props, stylers: viewParams.stylers });
    return (
      <_AnimatableView
        {...props}
        {...(viewParams.getProps ? viewParams.getProps(props, theme) : {})}
        ref={ref}
        style={styles}
      />
    );
  },
);
