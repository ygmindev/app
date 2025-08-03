import { TreasuryRateTable } from '@lib/frontend/quant/containers/TreasuryRateTable/TreasuryRateTable';
import { type TreasuryRateTablePropsModel } from '@lib/frontend/quant/containers/TreasuryRateTable/TreasuryRateTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TreasuryRateTablePropsModel>({
  target: TreasuryRateTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
