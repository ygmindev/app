import { IssuerFundingInProgressPage } from '#lib-frontend/issuer/pages/IssuerFundingInProgressPage/IssuerFundingInProgressPage';
import { type IssuerFundingInProgressPagePropsModel } from '#lib-frontend/issuer/pages/IssuerFundingInProgressPage/IssuerFundingInProgressPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<IssuerFundingInProgressPagePropsModel>(
  {
    target: IssuerFundingInProgressPage,
  },
);

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
