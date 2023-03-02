import { PaymentPage } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage';
import type { PaymentPagePropsModel } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PaymentPagePropsModel>({
  target: PaymentPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
