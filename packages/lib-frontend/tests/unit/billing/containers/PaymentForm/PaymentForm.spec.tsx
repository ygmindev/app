import { PaymentForm } from '@lib/frontend/billing/containers/PaymentForm/PaymentForm';
import { type PaymentFormPropsModel } from '@lib/frontend/billing/containers/PaymentForm/PaymentForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentFormPropsModel>({ target: PaymentForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
