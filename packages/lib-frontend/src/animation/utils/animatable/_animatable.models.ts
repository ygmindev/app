import type {
  AnimatablePropsModel,
  AnimatableRefModel,
} from '@lib/frontend/animation/animation.models';
import type { RSFCModel, SFCPropsModel } from '@lib/frontend/core/core.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { ComponentType } from 'react';

export interface _AnimatableParamsModel<TProps, TStyle extends StyleModel = ViewStyleModel> {
  Component: ComponentType<SFCPropsModel<TProps, TStyle>>;
}

export type _AnimatableModel<TProps, TStyle extends StyleModel = ViewStyleModel> = RSFCModel<
  AnimatableRefModel,
  TProps & AnimatablePropsModel<TStyle>
>;
