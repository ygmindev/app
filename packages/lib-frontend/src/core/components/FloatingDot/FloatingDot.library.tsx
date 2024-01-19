import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { FloatingDot } from '@lib/frontend/core/components/FloatingDot/FloatingDot';
import { type FloatingDotPropsModel } from '@lib/frontend/core/components/FloatingDot/FloatingDot.models';

export const props: LibraryPropsModel<FloatingDotPropsModel> = {
  Component: FloatingDot,
  defaultProps: {},
  variants: [],
};
