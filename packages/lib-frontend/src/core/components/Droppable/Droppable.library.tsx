import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import type { DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<DroppablePropsModel> = {
  Component: Droppable,

  defaultProps: {
    anchor: (isActive) => <WrapperFixture text={`${isActive}`} />,
    children: <WrapperFixture />,
  },
};
