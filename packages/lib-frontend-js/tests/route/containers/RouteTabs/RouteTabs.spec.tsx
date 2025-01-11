import { RouteTabs } from '@lib/frontend/js/route/containers/RouteTabs/RouteTabs';
import { type RouteTabsPropsModel } from '@lib/frontend/js/route/containers/RouteTabs/RouteTabs.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RouteTabsPropsModel>({ target: RouteTabs });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
