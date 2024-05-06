import { ConnectionBoundary } from '@lib/frontend/resource/components/ConnectionBoundary/ConnectionBoundary';
import { type ConnectionBoundaryPropsModel } from '@lib/frontend/resource/components/ConnectionBoundary/ConnectionBoundary.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ConnectionBoundaryPropsModel>({ target: ConnectionBoundary });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
