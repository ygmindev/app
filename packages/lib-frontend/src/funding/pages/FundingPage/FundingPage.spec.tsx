import { FundingPage } from '#lib-frontend/funding/pages/FundingPage/FundingPage';
import { type FundingPagePropsModel } from '#lib-frontend/funding/pages/FundingPage/FundingPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingPagePropsModel>({
  target: FundingPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
