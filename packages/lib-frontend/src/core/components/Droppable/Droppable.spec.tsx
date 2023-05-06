import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import type { DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const ACTIVE = 'ACTIVE';
const INACTIVE = 'INACTIVE';

const { Component, displayName, testID } = withTestComponent<DroppablePropsModel>({
  defaultProps: {
    anchor: (isActive) => <WrapperFixture text={isActive ? ACTIVE : INACTIVE} />,
  },
  target: Droppable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
