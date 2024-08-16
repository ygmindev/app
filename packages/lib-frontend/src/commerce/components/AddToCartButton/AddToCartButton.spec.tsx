import { AddToCartButton } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton';
import { ADD_TO_CART_BUTTON_TEST_ID } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.constants';
import { type AddToCartButtonPropsModel } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AddToCartButtonPropsModel>({
  target: AddToCartButton,
  testID: ADD_TO_CART_BUTTON_TEST_ID,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
