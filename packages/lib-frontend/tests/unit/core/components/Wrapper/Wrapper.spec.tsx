import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

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
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });

  // test('is vertical scrollable', async () => {
  //   const POSITION: PositionModel = { x: 0, y: 50 };
  //   let position: PositionModel = { x: 0, y: 0 };
  //   const { findByTestId } = await render({
  //     element: (
  //       <Component
  //         isVerticalScrollable
  //         onScroll={({ x, y }) => {
  //           position = { x, y };
  //         }}
  //       />
  //     ),
  //   });
  //   const element = await findByTestId(testID);
  //   scroll({ element, position: POSITION });
  //   await waitForExpect(async () => expect(position.y).toBe(POSITION.y) );
  // });

  // test('is horizontal scrollable', async () => {
  //   const POSITION: PositionModel = { x: 50, y: 0 };
  //   let position: PositionModel = { x: 0, y: 0 };
  //   const { findByTestId } = await render({
  //     element: (
  //       <Component
  //         isHorizontalScrollable
  //         onScroll={({ x, y }) => {
  //           position = { x, y };
  //         }}
  //       />
  //     ),
  //   });
  //   const element = await findByTestId(testID);
  //   scroll({ element, position: POSITION });
  //   await waitForExpect(async () => expect(position.x).toBe(POSITION.x) );
  // });
});
