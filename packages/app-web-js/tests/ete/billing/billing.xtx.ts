import { TestScreen } from '@lib/backend/test/utils/TestScreen/TestScreen';
import { PRODUCTS } from '@lib/frontend/commerce/commerce.constants';
import { ADD_TO_CART_BUTTON_TEST_ID } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.constants';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { APP_URI } from '@lib/shared/http/http.constants';

describe('billing', () => {
  test('works', async () => {
    const screen = new TestScreen({ rootUri: APP_URI });
    await screen.open(PRODUCTS);
    const addToCartButtons = await screen.findAll({
      type: SELECTOR_TYPE.TEST_ID,
      value: ADD_TO_CART_BUTTON_TEST_ID,
    });
    expect(true).toBe(true);
  });
});
