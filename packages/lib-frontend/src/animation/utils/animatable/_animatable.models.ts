import type { StylePropsModel } from '@lib/frontend/core/core.models';
import type { ComponentType } from 'react';

export interface _AnimatableParamsModel<TProps extends StylePropsModel> {
  Component: ComponentType<TProps>;
}
