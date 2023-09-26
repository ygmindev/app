import { FundingAmountForm } from '#lib-frontend/funding/containers/FundingAmountForm/FundingAmountForm';
import { type FundingAmountFormPropsModel } from '#lib-frontend/funding/containers/FundingAmountForm/FundingAmountForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingAmountFormPropsModel>({
  target: FundingAmountForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
