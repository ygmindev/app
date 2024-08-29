import { ProductItemTile } from '@lib/frontend/commerce/components/ProductItemTile/ProductItemTile';
import { type ProductItemTilePropsModel } from '@lib/frontend/commerce/components/ProductItemTile/ProductItemTile.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProductItemTilePropsModel>({ target: ProductItemTile });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
