import { PaymentMethod } from '@lib/frontend/billing/components/PaymentMethod/PaymentMethod';
import type { PaymentMethodPropsModel } from '@lib/frontend/billing/components/PaymentMethod/PaymentMethod.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentMethodPropsModel>({ target: PaymentMethod });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
