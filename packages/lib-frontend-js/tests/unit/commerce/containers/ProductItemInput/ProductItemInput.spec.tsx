import { ProductItemInput } from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput';
import { type ProductItemInputPropsModel } from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProductItemInputPropsModel>({ target: ProductItemInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
