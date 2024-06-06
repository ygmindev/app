import { ProductItemForm } from '@lib/frontend/commerce/containers/ProductItemForm/ProductItemForm';
import { type ProductItemFormPropsModel } from '@lib/frontend/commerce/containers/ProductItemForm/ProductItemForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProductItemFormPropsModel>({
  target: ProductItemForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
