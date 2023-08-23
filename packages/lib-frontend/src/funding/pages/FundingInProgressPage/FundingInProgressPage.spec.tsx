import { FundingInProgressPage } from '#lib-frontend/funding/pages/FundingInProgressPage/FundingInProgressPage';
import { type FundingInProgressPagePropsModel } from '#lib-frontend/funding/pages/FundingInProgressPage/FundingInProgressPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingInProgressPagePropsModel>({
  target: FundingInProgressPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
