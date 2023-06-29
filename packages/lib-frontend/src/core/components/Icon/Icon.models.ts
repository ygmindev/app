import { type AnimatablePropsModel } from '#lib-frontend/animation/animation.models';
import { type _IconPropsModel } from '#lib-frontend/core/components/Icon/_Icon.models';
import { type TextPropsModel } from '#lib-frontend/core/components/Text/Text.models';
import { type TextStyleModel } from '#lib-frontend/style/style.models';

export type IconPropsModel = _IconPropsModel &
  Omit<TextPropsModel, 'children'> &
  AnimatablePropsModel<TextStyleModel>;
