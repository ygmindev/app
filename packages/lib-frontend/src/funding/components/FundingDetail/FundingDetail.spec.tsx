import { FundingDetail } from '#lib-frontend/funding/components/FundingDetail/FundingDetail';
import { type FundingDetailPropsModel } from '#lib-frontend/funding/components/FundingDetail/FundingDetail.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingDetailPropsModel>({ target: FundingDetail });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
