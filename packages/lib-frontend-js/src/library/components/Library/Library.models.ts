import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type OptionModel } from '@lib/frontend/core/core.models';
import { type LibraryVariantModel } from '@lib/frontend/library/library.models';
import { type ComponentType, type ReactElement } from 'react';

export type LibraryPropsModel<TProps> = Pick<WrapperPropsModel, 'minWidth'> &
  Pick<OptionModel, 'category'> & {
    Component: ComponentType<TProps>;
    Renderer?: ComponentType<{ element: ReactElement<TProps>; props: TProps }>;
    defaultProps: TProps;
    title?: string;
    variants?: Array<LibraryVariantModel<TProps>>;
  };
