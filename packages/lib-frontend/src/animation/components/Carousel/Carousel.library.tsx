import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { Carousel } from '@lib/frontend/animation/components/Carousel/Carousel';
import { type CarouselPropsModel } from '@lib/frontend/animation/components/Carousel/Carousel.models';

export const props: LibraryPropsModel<CarouselPropsModel> = {
  Component: Carousel,
  defaultProps: {},
  variants: [],
};
