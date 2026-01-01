import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type TextStyleModel } from '@lib/frontend/style/style.models';

export type AnimatableTextPropsModel = AnimatablePropsModel<TextStyleModel> & TextPropsModel;
