import { _Animatable } from '@lib/frontend/animation/components/Animatable/_Animatable';
import type { AnimatablePropsModel } from '@lib/frontend/animation/components/Animatable/Animatable.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';

export const Animatable: SFCModel<AnimatablePropsModel> = ({ duration, ...props }) => {
  const theme = useTheme();
  return <_Animatable {...props} duration={duration || theme.animation.duration} />;
};
