import { ProductTable } from '@lib/frontend/commerce/containers/ProductTable/ProductTable';
import { type ProductTablePropsModel } from '@lib/frontend/commerce/containers/ProductTable/ProductTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProductTablePropsModel>({
  target: ProductTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
