import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type LibraryVariantModel } from '@lib/frontend/library/library.models';
import { type ComponentType, type ReactElement } from 'react';

export type LibraryPropsModel<TProps> = Pick<WrapperPropsModel, 'minWidth'> & {
  Component: ComponentType<TProps>;
  Renderer?(params: { element: ReactElement; props: TProps }): ReactElement;
  category?: string;
  defaultProps: TProps;
  title?: string;
  variants?: Array<LibraryVariantModel<TProps>>;
};
