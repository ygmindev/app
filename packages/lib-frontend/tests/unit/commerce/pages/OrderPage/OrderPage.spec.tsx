import { OrderPage } from '@lib/frontend/commerce/pages/OrderPage/OrderPage';
import { type OrderPagePropsModel } from '@lib/frontend/commerce/pages/OrderPage/OrderPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OrderPagePropsModel>({
  target: OrderPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
