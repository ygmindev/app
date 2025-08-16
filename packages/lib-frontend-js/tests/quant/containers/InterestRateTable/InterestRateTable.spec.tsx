import { InterestRateTable } from '@lib/frontend/quant/containers/InterestRateTable/InterestRateTable';
import { type InterestRateTablePropsModel } from '@lib/frontend/quant/containers/InterestRateTable/InterestRateTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<InterestRateTablePropsModel>({
  target: InterestRateTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
