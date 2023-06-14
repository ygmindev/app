import type { AnimatableTextPropsModel } from '#lib-frontend/animation/components/AnimatableText/AnimatableText.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export interface TranslatableTextPropsModel
  extends Omit<AnimatableTextPropsModel, 'children'>,
    ChildrenPropsModel<TranslatableTextModel> {
  ns?: Array<string>;
}
