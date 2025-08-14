import { QuoteTable } from '@lib/frontend/quant/containers/QuoteTable/QuoteTable';
import { type QuoteTablePropsModel } from '@lib/frontend/quant/containers/QuoteTable/QuoteTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<QuoteTablePropsModel>({
  target: QuoteTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
