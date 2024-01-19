import { NavigationBar } from '@lib/frontend/core/containers/NavigationBar/NavigationBar';
import { type NavigationBarPropsModel } from '@lib/frontend/core/containers/NavigationBar/NavigationBar.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NavigationBarPropsModel>({
  target: NavigationBar,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
