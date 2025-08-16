import { InterestRateQuoteTable } from '@lib/frontend/quant/containers/InterestRateQuoteTable/InterestRateQuoteTable';
import { type InterestRateQuoteTablePropsModel } from '@lib/frontend/quant/containers/InterestRateQuoteTable/InterestRateQuoteTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<InterestRateQuoteTablePropsModel>({
  target: InterestRateQuoteTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
