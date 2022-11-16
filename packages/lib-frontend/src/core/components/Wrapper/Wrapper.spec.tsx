import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { PositionModel } from '@lib/frontend/core/utils/measure/measure.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { scroll } from '@lib/frontend/testing/utils/scroll/scroll';
import { waitForExpect } from '@lib/frontend/testing/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<WrapperPropsModel>({
  defaultProps: {
    children: <WrapperFixture />,
    height: 100,
    width: 100,
  },
  target: Wrapper,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });

  test('is vertical scrollable', async () => {
    const POSITION: PositionModel = { x: 0, y: 50 };
    let position: PositionModel = { x: 0, y: 0 };
    const { queryByTestId } = render(
      <Component
        isVerticalScrollable
        onScroll={({ x, y }) => {
          position = { x, y };
        }}
      />,
    );
    const element = queryByTestId(testID);
    scroll(element, POSITION);
    await waitForExpect(() => expect(position.y).toBe(POSITION.y));
  });

  test('is horizontal scrollable', async () => {
    const POSITION: PositionModel = { x: 50, y: 0 };
    let position: PositionModel = { x: 0, y: 0 };
    const { queryByTestId } = render(
      <Component
        isHorizontalScrollable
        onScroll={({ x, y }) => {
          position = { x, y };
        }}
      />,
    );
    const element = queryByTestId(testID);
    scroll(element, POSITION);
    await waitForExpect(() => expect(position.x).toBe(POSITION.x));
  });
});
