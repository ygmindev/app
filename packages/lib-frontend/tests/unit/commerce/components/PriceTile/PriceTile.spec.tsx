import { PriceTile } from '@lib/frontend/commerce/components/PriceTile/PriceTile';
import { type PriceTilePropsModel } from '@lib/frontend/commerce/components/PriceTile/PriceTile.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PriceTilePropsModel>({
  target: PriceTile,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
