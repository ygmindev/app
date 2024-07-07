import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type LibraryVariantModel } from '@lib/frontend/library/library.models';
import { type ComponentType } from 'react';

export type LibraryPropsModel<TProps> = Pick<WrapperPropsModel, 'minWidth'> & {
  Component: ComponentType<TProps>;
  Renderer?: ComponentType<TProps>;
  category?: string;
  defaultProps: TProps;
  title?: string;
  variants?: Array<LibraryVariantModel<TProps>>;
};
