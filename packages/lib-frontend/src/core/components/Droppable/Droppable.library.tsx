import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import { type DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<DroppablePropsModel> = {
  Component: Droppable,

  defaultProps: {
    anchor: (isActive) => (
      <WrapperFixture
        height={50}
        width={50}>
        {isActive}
      </WrapperFixture>
    ),
    children: <WrapperFixture />,
  },

  variants: [
    ...Object.values(DIRECTION).map((direction) => ({ props: { direction } })),
    { props: { isFullWidth: true } },
  ],
};
