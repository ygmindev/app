import { PricingTable } from '@lib/frontend/commerce/containers/PricingTable/PricingTable';
import { type PricingTablePropsModel } from '@lib/frontend/commerce/containers/PricingTable/PricingTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PricingTablePropsModel>({
  target: PricingTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
