import type { ComponentType } from 'react';

import type { DocgenMetaDataPropsModel } from '#lib-library/docgen/utils/docgen/docgen.models';
import type { PartialModel } from '#lib-shared/core/core.models';

export interface LibraryPropsModel<TProps> {
  Component: ComponentType<TProps>;
  Renderer?: ComponentType<TProps>;
  category?: string;
  defaultProps: TProps;
  name?: string;
  propTypes?: Array<DocgenMetaDataPropsModel>;
  variants?: Array<LibraryVariantModel<TProps>>;
}

export interface LibraryVariantModel<TProps> {
  category?: string;
  name?: string;
  props?: PartialModel<TProps>;
}
