import { type AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { type _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';

export type AnimatableTextPropsModel = _AnimatableTextPropsModel & TextPropsModel;

export type AnimatableTextRefModel = AnimatableRefModel<ViewStyleModel>;
