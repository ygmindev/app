import { ReportPage } from '@lib/frontend/test/pages/ReportPage/ReportPage';
import { type ReportPagePropsModel } from '@lib/frontend/test/pages/ReportPage/ReportPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ReportPagePropsModel>({
  target: ReportPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
