import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<DropdownPropsModel> = {
  Component: Dropdown,

  Renderer: ({ ...props }) => (
    <WrapperFixture>
      <Dropdown {...props} />
    </WrapperFixture>
  ),

  defaultProps: {
    anchor: <WrapperFixture width={150} />,
    children: <WrapperFixture />,
    isOpen: true,
  },

  variants: [
    { props: { isLeft: true } },
    { props: { isRight: true } },
    { props: { isTop: true } },
    { props: { isFullWidth: true } },
  ],
};
