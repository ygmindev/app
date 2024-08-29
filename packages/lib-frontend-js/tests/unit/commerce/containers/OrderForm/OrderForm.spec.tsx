import { OrderForm } from '@lib/frontend/commerce/containers/OrderForm/OrderForm';
import { type OrderFormPropsModel } from '@lib/frontend/commerce/containers/OrderForm/OrderForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OrderFormPropsModel>({
  target: OrderForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
