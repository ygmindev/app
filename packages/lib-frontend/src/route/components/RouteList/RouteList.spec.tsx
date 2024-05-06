import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { type RouteListPropsModel } from '@lib/frontend/route/components/RouteList/RouteList.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RouteListPropsModel>({
  target: RouteList,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
