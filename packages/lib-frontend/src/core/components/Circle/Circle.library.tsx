import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { Circle } from '@lib/frontend/core/components/Circle/Circle';
import { type CirclePropsModel } from '@lib/frontend/core/components/Circle/Circle.models';

export const props: LibraryPropsModel<CirclePropsModel> = {
  Component: Circle,
  defaultProps: {},
  variants: [],
};
