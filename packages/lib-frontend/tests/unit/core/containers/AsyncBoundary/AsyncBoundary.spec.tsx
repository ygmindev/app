import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { type AsyncBoundaryPropsModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AsyncBoundaryPropsModel>({
  target: AsyncBoundary,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
