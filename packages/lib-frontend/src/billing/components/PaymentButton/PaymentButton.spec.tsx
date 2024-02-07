import { PaymentButton } from 'lib/frontend/billing/components/PaymentButton/PaymentButton';
import { type PaymentButtonPropsModel } from 'lib/frontend/billing/components/PaymentButton/PaymentButton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentButtonPropsModel>({ target: PaymentButton });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
