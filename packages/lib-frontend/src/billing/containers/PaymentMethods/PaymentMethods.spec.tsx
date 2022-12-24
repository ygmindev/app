import { PaymentMethods } from '@lib/frontend/billing/containers/PaymentMethods/PaymentMethods';
import type { PaymentMethodsPropsModel } from '@lib/frontend/billing/containers/PaymentMethods/PaymentMethods.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentMethodsPropsModel>({
  target: PaymentMethods,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
