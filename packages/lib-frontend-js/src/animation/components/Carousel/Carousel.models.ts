import { type SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type DimensionModel } from '@lib/frontend/core/core.models';

export type CarouselPropsModel = WrapperPropsModel &
  Pick<SlidesPropsModel, 'slides' | 'current'> &
  DimensionModel;
