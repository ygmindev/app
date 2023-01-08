import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { MotiProps } from 'moti';

export type _GetAnimatablePropsParamsModel<TStyle extends StyleModel = ViewStyleModel> = [
  animation: AnimationModel<TStyle>,
  theme: UseThemeModel,
];

export type _GetAnimatablePropsModel = MotiProps;
