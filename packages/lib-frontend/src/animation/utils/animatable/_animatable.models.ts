import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { ComponentType } from 'react';

export interface _AnimatableParamsModel<
  TProps extends StylePropsModel<TStyle>,
  TStyle extends StyleModel = ViewStyleModel,
> {
  Component: ComponentType<TProps>;
}

export type _AnimatableModel<TProps, TStyle extends StyleModel = ViewStyleModel> = SFCModel<
  TProps & AnimatablePropsModel<TStyle>,
  TStyle
>;
