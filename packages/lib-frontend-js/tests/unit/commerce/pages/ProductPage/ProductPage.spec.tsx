import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { type ProductPagePropsModel } from '@lib/frontend/commerce/pages/ProductPage/ProductPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProductPagePropsModel>({
  target: ProductPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
