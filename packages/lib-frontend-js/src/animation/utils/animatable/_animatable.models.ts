import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type SFCModel, type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type UseStylesParamsModel } from '@lib/frontend/style/hooks/useStyles/useStyles.models';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type ComponentType } from 'react';

export type _AnimatableParamsModel<TProps, TStyle extends StyleModel = ViewStyleModel> = Pick<
  UseStylesParamsModel<TProps, TStyle>,
  'stylers'
> & {
  Component: ComponentType<SFCPropsModel<TProps, TStyle>>;
};

export type _AnimatableModel<TProps, TStyle extends StyleModel = ViewStyleModel> = SFCModel<
  TProps & AnimatablePropsModel<TStyle>
>;
