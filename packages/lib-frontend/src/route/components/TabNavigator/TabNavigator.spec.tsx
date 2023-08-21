import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type TabNavigatorPropsModel } from '#lib-frontend/route/components/TabNavigator/TabNavigator.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TabNavigatorPropsModel>({
  target: TabNavigator,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
