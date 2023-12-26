import { PaymentMethodFormPage } from '#lib-frontend/billing/pages/PaymentMethodFormPage2/PaymentMethodFormPage';
import { type PaymentMethodFormPagePropsModel } from '#lib-frontend/billing/pages/PaymentMethodFormPage2/PaymentMethodFormPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentMethodFormPagePropsModel>({
  target: PaymentMethodFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
