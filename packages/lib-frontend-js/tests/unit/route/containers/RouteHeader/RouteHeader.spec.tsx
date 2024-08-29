import { RouteHeader } from '@lib/frontend/route/containers/RouteHeader/RouteHeader';
import { type RouteHeaderPropsModel } from '@lib/frontend/route/containers/RouteHeader/RouteHeader.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RouteHeaderPropsModel>({
  target: RouteHeader,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
