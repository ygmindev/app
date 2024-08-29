import { PaymentMethodPage } from '@lib/frontend/billing/pages/PaymentMethodPage2/PaymentMethodPage';
import { type PaymentMethodPagePropsModel } from '@lib/frontend/billing/pages/PaymentMethodPage2/PaymentMethodPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentMethodPagePropsModel>({
  target: PaymentMethodPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
