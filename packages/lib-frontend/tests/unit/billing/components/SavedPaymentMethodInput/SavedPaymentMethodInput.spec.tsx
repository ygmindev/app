import { SavedPaymentMethodInput } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { type SavedPaymentMethodInputPropsModel } from 'lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput.models';

const { Component, displayName, testID } = withTestComponent<SavedPaymentMethodInputPropsModel>({
  target: SavedPaymentMethodInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
