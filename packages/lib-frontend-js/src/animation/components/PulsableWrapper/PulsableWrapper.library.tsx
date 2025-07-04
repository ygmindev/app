import { PulsableWrapper } from '@lib/frontend/animation/components/PulsableWrapper/PulsableWrapper';
import { type PulsableWrapperPropsModel } from '@lib/frontend/animation/components/PulsableWrapper/PulsableWrapper.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { LIBRARY_CATEGORY_ANIMATION } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<PulsableWrapperPropsModel> = {
  Component: PulsableWrapper,
  category: LIBRARY_CATEGORY_ANIMATION,
  defaultProps: {
    children: <Button>button</Button>,
  },
  variants: [],
};
