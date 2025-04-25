import {
  type AnimatablePropsModel,
  type AnimatableRefModel,
} from '@lib/frontend/animation/animation.models';
import { type RSFCModel, type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type ComponentType } from 'react';

export type _AnimatableParamsModel<TProps, TStyle extends StyleModel = ViewStyleModel> = {
  Component: ComponentType<SFCPropsModel<TProps, TStyle>>;
};

export type _AnimatableModel<TProps, TStyle extends StyleModel = ViewStyleModel> = RSFCModel<
  AnimatableRefModel<TStyle>,
  TProps & AnimatablePropsModel<TStyle>
>;
