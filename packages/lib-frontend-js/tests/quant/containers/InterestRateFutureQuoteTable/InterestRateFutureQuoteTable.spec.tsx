import { InterestRateFutureQuoteTable } from '@lib/frontend/quant/containers/InterestRateFutureQuoteTable/InterestRateFutureQuoteTable';
import { type InterestRateFutureQuoteTablePropsModel } from '@lib/frontend/quant/containers/InterestRateFutureQuoteTable/InterestRateFutureQuoteTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<InterestRateFutureQuoteTablePropsModel>({
  target: InterestRateFutureQuoteTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
