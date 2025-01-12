import { Button } from '@lib/frontend/core/components/Button/Button';
import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import { type DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<DroppablePropsModel> = {
  Component: Droppable,

  Renderer: ({ element }) => <Wrapper isCenter>{element}</Wrapper>,

  defaultProps: {
    anchor: (isActive) => <Button>{`${isActive}`}</Button>,
    children: <WrapperFixture />,
  },

  variants: [
    ...cartesianObject({ direction: Object.values(DIRECTION) }).map((props) => ({ props })),
    { props: { isFullWidth: true } },
  ],
};
