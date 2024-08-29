import { NewPaymentMethodForm } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm';
import { type NewPaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NewPaymentMethodFormPropsModel>({
  target: NewPaymentMethodForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
