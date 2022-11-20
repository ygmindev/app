import { Cards } from '@lib/frontend/billing/containers/Cards/Cards';
import type { CardsPropsModel } from '@lib/frontend/billing/containers/Cards/Cards.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CardsPropsModel>({
  target: Cards,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
