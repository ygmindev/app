import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { ComponentType } from 'react';

export interface _AnimatableParamsModel<TProps extends WithStyleModel> {
  Component: ComponentType<TProps>;
}
