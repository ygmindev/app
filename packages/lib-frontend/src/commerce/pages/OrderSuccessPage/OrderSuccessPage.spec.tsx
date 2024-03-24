import { OrderSuccessPage } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage';
import { type OrderSuccessPagePropsModel } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OrderSuccessPagePropsModel>({
  target: OrderSuccessPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
