import { PaymentMethodItem } from '@lib/frontend/billing/components/PaymentMethodItem/PaymentMethodItem';
import type { PaymentMethodItemPropsModel } from '@lib/frontend/billing/components/PaymentMethodItem/PaymentMethodItem.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentMethodItemPropsModel>({
  target: PaymentMethodItem,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
