import { FundingAgencyForm } from '#lib-frontend/funding/containers/FundingAgencyForm/FundingAgencyForm';
import { type FundingAgencyFormPropsModel } from '#lib-frontend/funding/containers/FundingAgencyForm/FundingAgencyForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingAgencyFormPropsModel>({
  target: FundingAgencyForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
