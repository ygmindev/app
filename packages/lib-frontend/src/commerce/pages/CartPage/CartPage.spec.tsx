import { CartPage } from '@lib/frontend/commerce/pages/CartPage/CartPage';
import { type CartPagePropsModel } from '@lib/frontend/commerce/pages/CartPage/CartPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CartPagePropsModel>({
  target: CartPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
