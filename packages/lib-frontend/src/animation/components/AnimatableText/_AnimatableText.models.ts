import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import { type TextStyleModel } from '@lib/frontend/style/style.models';

export type _AnimatableTextPropsModel = _TextPropsModel & AnimatablePropsModel<TextStyleModel>;
