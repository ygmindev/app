import { PaymentMethodInput } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputPropsModel } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentMethodInputPropsModel>({ target: PaymentMethodInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
