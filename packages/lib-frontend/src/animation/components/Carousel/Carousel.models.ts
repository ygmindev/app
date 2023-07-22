import { type SlidesPropsModel } from '#lib-frontend/animation/components/Slides/Slides.models';
import { type DimensionModel } from '#lib-frontend/core/core.models';

export type CarouselPropsModel = Pick<SlidesPropsModel, 'slides' | 'current'> & DimensionModel;
