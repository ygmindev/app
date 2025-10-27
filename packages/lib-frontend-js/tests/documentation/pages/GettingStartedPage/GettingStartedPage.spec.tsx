import { GettingStartedPage } from '@lib/frontend/documentation/pages/GettingStartedPage/GettingStartedPage';
import { type GettingStartedPagePropsModel } from '@lib/frontend/documentation/pages/GettingStartedPage/GettingStartedPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<GettingStartedPagePropsModel>({
  target: GettingStartedPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
