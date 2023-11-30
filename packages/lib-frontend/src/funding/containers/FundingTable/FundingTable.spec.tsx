import { FundingTable } from '#lib-frontend/funding/containers/FundingTable/FundingTable';
import { type FundingTablePropsModel } from '#lib-frontend/funding/containers/FundingTable/FundingTable.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FundingTablePropsModel>({
  target: FundingTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
