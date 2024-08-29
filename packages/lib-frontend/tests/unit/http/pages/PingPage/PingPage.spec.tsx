import { PingPage } from '@lib/frontend/http/pages/PingPage/PingPage';
import { type PingPagePropsModel } from '@lib/frontend/http/pages/PingPage/PingPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PingPagePropsModel>({
  target: PingPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
