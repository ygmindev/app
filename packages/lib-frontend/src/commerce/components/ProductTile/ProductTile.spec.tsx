import { ProductTile } from '@lib/frontend/commerce/components/ProductTile/ProductTile';
import { type ProductTilePropsModel } from '@lib/frontend/commerce/components/ProductTile/ProductTile.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProductTilePropsModel>({
  target: ProductTile,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
