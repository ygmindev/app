import { FundingCurrencyForm } from '#lib-frontend/funding/containers/FundingCurrencyForm/FundingCurrencyForm';
import { type FundingCurrencyFormPropsModel } from '#lib-frontend/funding/containers/FundingCurrencyForm/FundingCurrencyForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingCurrencyFormPropsModel>({
  target: FundingCurrencyForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
