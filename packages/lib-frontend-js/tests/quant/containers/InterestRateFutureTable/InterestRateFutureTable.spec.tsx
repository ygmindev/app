import { InterestRateFutureTable } from '@lib/frontend/quant/containers/InterestRateFutureTable/InterestRateFutureTable';
import { type InterestRateFutureTablePropsModel } from '@lib/frontend/quant/containers/InterestRateFutureTable/InterestRateFutureTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<InterestRateFutureTablePropsModel>({
  target: InterestRateFutureTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
