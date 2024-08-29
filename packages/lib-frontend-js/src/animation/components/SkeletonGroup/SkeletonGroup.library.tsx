import { SkeletonGroup } from '@lib/frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { type SkeletonGroupPropsModel } from '@lib/frontend/animation/components/SkeletonGroup/SkeletonGroup.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<SkeletonGroupPropsModel> = {
  Component: SkeletonGroup,
  defaultProps: {},
  variants: [],
};
