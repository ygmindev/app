import { HomePage } from '#lib-frontend/deleteme/pages/HomePage/HomePage';
import { type HomePagePropsModel } from '#lib-frontend/deleteme/pages/HomePage/HomePage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<HomePagePropsModel>({
  target: HomePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
