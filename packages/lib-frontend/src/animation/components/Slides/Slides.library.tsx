import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SlidesPropsModel> = {
  Component: Slides,
  defaultProps: {},
  variants: [],
};
