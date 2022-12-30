import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { StylePropsModel } from '@lib/frontend/style/style.models';
import type { ComponentType } from 'react';

export interface _AnimatableParamsModel<TProps extends StylePropsModel> {
  Component: ComponentType<TProps>;
}

export type _AnimatableModel<TProps> = SFCModel<TProps & AnimatablePropsModel>;
