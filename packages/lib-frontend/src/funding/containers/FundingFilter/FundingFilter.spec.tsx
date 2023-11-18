import { FundingFilter } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter';
import { type FundingFilterPropsModel } from '#lib-frontend/funding/containers/FundingFilter/FundingFilter.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingFilterPropsModel>({ target: FundingFilter });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
