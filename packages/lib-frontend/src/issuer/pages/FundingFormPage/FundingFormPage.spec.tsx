import { FundingFormPage } from '#lib-frontend/issuer/pages/FundingFormPage/FundingFormPage';
import { type FundingFormPagePropsModel } from '#lib-frontend/issuer/pages/FundingFormPage/FundingFormPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingFormPagePropsModel>({
  target: FundingFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
