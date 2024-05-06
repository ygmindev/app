import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type DocgenMetaDataPropsModel } from '@lib/library/docgen/utils/docgen/docgen.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type ComponentType } from 'react';

export type LibraryPropsModel<TProps> = Pick<WrapperPropsModel, 'minWidth'> & {
  Component: ComponentType<TProps>;
  Renderer?: ComponentType<TProps>;
  category?: string;
  defaultProps: TProps;
  name?: string;
  propTypes?: Array<DocgenMetaDataPropsModel>;
  variants?: Array<LibraryVariantModel<TProps>>;
};

export type LibraryVariantModel<TProps> = {
  category?: string;
  name?: string;
  props?: PartialModel<TProps>;
};
