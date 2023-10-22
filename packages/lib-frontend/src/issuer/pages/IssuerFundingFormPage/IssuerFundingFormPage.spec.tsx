import { IssuerFundingFormPage } from '#lib-frontend/issuer/pages/IssuerFundingFormPage/IssuerFundingFormPage';
import { type IssuerFundingFormPagePropsModel } from '#lib-frontend/issuer/pages/IssuerFundingFormPage/IssuerFundingFormPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<IssuerFundingFormPagePropsModel>({
  target: IssuerFundingFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
