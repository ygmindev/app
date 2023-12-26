import { CreditCardForm } from '#lib-frontend/billing/containers/CreditCardForm/CreditCardForm';
import { type CreditCardFormPropsModel } from '#lib-frontend/billing/containers/CreditCardForm/CreditCardForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CreditCardFormPropsModel>({ target: CreditCardForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
