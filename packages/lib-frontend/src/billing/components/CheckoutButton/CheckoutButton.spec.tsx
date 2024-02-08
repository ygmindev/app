import { CheckoutButton } from '@lib/frontend/billing/components/CheckoutButton/CheckoutButton';
import { type CheckoutButtonPropsModel } from '@lib/frontend/billing/components/CheckoutButton/CheckoutButton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CheckoutButtonPropsModel>({
  target: CheckoutButton,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
