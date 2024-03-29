import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import { type AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<AnimatableTextPropsModel> = {
  Component: AnimatableText,
  defaultProps: {},
  variants: [],
};
