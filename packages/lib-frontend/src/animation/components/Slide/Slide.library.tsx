import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import type { SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';

export const props: LibraryPropsModel<SlidePropsModel> = {
  Component: Slide,
  defaultProps: {},
  variants: [],
};
