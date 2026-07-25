import { Zoomable } from '@lib/frontend/animation/components/Zoomable/Zoomable';
import { type ZoomablePropsModel } from '@lib/frontend/animation/components/Zoomable/Zoomable.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ZoomablePropsModel> = {
  Component: Zoomable,
  defaultProps: {},
  variants: [],
};
