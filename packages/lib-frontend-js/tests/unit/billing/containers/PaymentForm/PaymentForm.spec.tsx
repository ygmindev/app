import { OrderPaymentPage } from '@lib/frontend/billing/containers/OrderPaymentPage/OrderPaymentPage';
import { type OrderPaymentPagePropsModel } from '@lib/frontend/billing/containers/OrderPaymentPage/OrderPaymentPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OrderPaymentPagePropsModel>({ target: OrderPaymentPage });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
