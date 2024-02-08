import { PaymentMethodContainer } from '@lib/frontend/billing/containers/PaymentMethodContainer/PaymentMethodContainer';
import { type PaymentMethodContainerPropsModel } from '@lib/frontend/billing/containers/PaymentMethodContainer/PaymentMethodContainer.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentMethodContainerPropsModel>({
  target: PaymentMethodContainer,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
