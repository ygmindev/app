import { AnimatableView } from '@lib/frontend/animation/components/AnimatableView/AnimatableView';
import { type AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/AnimatableView.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<AnimatableViewPropsModel> = {
  Component: AnimatableView,
  defaultProps: {},
  variants: [],
};
