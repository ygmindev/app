import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { DocgenMetaDataPropsModel } from '@lib/library/docgen/utils/docgen/docgen.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { ComponentType, ReactElement } from 'react';

export interface LibraryPropsModel<TProps> {
  Component: ComponentType<TProps>;
  Renderer?: ComponentType<ChildrenPropsModel<ReactElement<TProps>>>;
  category?: string;
  defaultProps: TProps;
  name?: string;
  propTypes?: Array<DocgenMetaDataPropsModel>;
  variants?: Array<{ group?: string; name?: string; props?: PartialModel<TProps> }>;
}
