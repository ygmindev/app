import { IssuerFundingPage } from '#lib-frontend/issuer/pages/IssuerFundingPage/IssuerFundingPage';
import { type IssuerFundingPagePropsModel } from '#lib-frontend/issuer/pages/IssuerFundingPage/IssuerFundingPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<IssuerFundingPagePropsModel>({
  target: IssuerFundingPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
