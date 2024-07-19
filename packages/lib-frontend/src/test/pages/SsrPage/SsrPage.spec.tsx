import { SsrPage } from '@lib/frontend/test/pages/SsrPage/SsrPage';
import { type SsrPagePropsModel } from '@lib/frontend/test/pages/SsrPage/SsrPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SsrPagePropsModel>({
  target: SsrPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
