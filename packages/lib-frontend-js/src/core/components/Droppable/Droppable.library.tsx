import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import { type DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

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
    ...cartesianObject({ direction: Object.values(DIRECTION) }).map((props) => ({ props })),
    { props: { isFullWidth: true } },
  ],
};
