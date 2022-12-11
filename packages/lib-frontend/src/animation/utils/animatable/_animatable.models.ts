import type { StyleModel } from '@lib/frontend/style/style.models';
import type { ComponentType } from 'react';

export interface _AnimatableParamsModel<TProps extends { style?: StyleModel }> {
  Component: ComponentType<TProps>;
}
