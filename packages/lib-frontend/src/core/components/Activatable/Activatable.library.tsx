import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import type { ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ActivatablePropsModel> = {
  defaultProps: {
    children: (isActive) => <WrapperFixture text={`${isActive}`} />,
  },
  Component: Activatable,
  variants: [{ props: { isHoverable: false } }],
};
