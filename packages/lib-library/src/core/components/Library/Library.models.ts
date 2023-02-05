import type { DocgenMetaDataPropsModel } from '@lib/library/docgen/utils/docgen/docgen.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { ComponentType } from 'react';

export interface LibraryPropsModel<TProps> {
  Component: ComponentType<TProps>;
  Renderer?: ComponentType<TProps>;
  category?: string;
  defaultProps: TProps;
  name?: string;
  propTypes?: Array<DocgenMetaDataPropsModel>;
  variants?: Array<{ category?: string; name?: string; props?: PartialModel<TProps> }>;
}
