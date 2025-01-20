import { OrderProductsPage } from '@lib/frontend/commerce/pages/OrderProductsPage/OrderProductsPage';
import { type OrderProductsPagePropsModel } from '@lib/frontend/commerce/pages/OrderProductsPage/OrderProductsPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OrderProductsPagePropsModel>({
  target: OrderProductsPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
