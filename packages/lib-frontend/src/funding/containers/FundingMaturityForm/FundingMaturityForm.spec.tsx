import { FundingMaturityForm } from '#lib-frontend/funding/containers/FundingMaturityForm/FundingMaturityForm';
import { type FundingMaturityFormPropsModel } from '#lib-frontend/funding/containers/FundingMaturityForm/FundingMaturityForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingMaturityFormPropsModel>({
  target: FundingMaturityForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
