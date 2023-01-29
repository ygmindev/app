import type { PartialModel } from '@lib/shared/core/core.models';
import type { ComponentType } from 'react';

export interface LibraryPropsModel<TProps> {
  Component: ComponentType<TProps>;
  category?: string;
  defaultProps: TProps;
  name?: string;
  variants?: Array<{ name?: string; props?: PartialModel<TProps> }>;
}
