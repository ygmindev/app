import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { type RotatablePropsModel } from '@lib/frontend/animation/components/Rotatable/Rotatable.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RotatablePropsModel> = {
  Component: Rotatable,
  defaultProps: {},
  variants: [],
};
