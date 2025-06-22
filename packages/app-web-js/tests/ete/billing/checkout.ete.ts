import { ProductImplementation } from '@lib/backend/commerce/resources/Product/ProductImplementation/ProductImplementation';
import { withTestScreen } from '@lib/backend/test/utils/withTestScreen/withTestScreen';
import { TEST_CARD_NUMBER_VALID } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.constants';
import { ORDER_PAYMENT_TEST_ID } from '@lib/frontend/billing/containers/OrderPaymentPage/OrderPaymentPage.constants';
import { PAYMENT_METHOD_INPUT_NEW_TEST_ID } from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.constants';
import { ORDER, PRODUCTS } from '@lib/frontend/commerce/commerce.constants';
import { ADD_TO_CART_BUTTON_TEST_ID } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.constants';
import { ORDER_PRODUCTS_TEST_ID } from '@lib/frontend/commerce/pages/OrderProductsPage/OrderProductsPage.constants';
import { BACKDROP_TEST_ID } from '@lib/frontend/core/components/Modal/Modal.constants';
import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';

const TEST_NAME = 'checkout';

describe(TEST_NAME, () => {
  const { screen } = withTestScreen({ testName: TEST_NAME });

  const addProductsToCart = async (): Promise<void> => {
    const productService = Container.get(ProductImplementation);
    const [product1, product2] =
      (await productService.getMany({ options: { take: 2 } })).result ?? [];

    if (product1 && product2) {
      await screen.open(PRODUCTS);
      await screen.snapshot();

      // add first product
      const BUTTON_TEST_ID_1 = `${ADD_TO_CART_BUTTON_TEST_ID}-${product1._id}-${product1[PRICING_RESOURCE_NAME]?.[0]._id}`;
      await screen.find({ value: BUTTON_TEST_ID_1 }).then((h) => h?.press());
      await screen.snapshot();
      await screen.find({ value: BACKDROP_TEST_ID }).then((h) => h?.press());

      // add second product
      const BUTTON_TEST_ID_2 = `${ADD_TO_CART_BUTTON_TEST_ID}-${product2._id}-${product2[PRICING_RESOURCE_NAME]?.[0]._id}`;
      await screen.find({ value: BUTTON_TEST_ID_2 }).then((h) => h?.press());
      await screen.snapshot();
      await screen.find({ value: BACKDROP_TEST_ID }).then((h) => h?.press());

      await screen.open(ORDER);
      await screen.snapshot();

      await screen.find({ value: `${ORDER_PRODUCTS_TEST_ID}-submit` }).then((h) => h?.press());
      await screen.snapshot();
    } else {
      throw new NotFoundError('products');
    }
  };

  const cardSubmit = async (number: string): Promise<void> => {
    const frame = await screen.find({
      key: 'title',
      type: SELECTOR_TYPE.FRAME,
      value: 'Secure payment input frame',
    });

    if (frame) {
      await frame
        .find({ type: SELECTOR_TYPE.ID, value: 'Field-numberInput' })
        .then((h) => h?.type(number));

      await frame
        .find({ type: SELECTOR_TYPE.ID, value: 'Field-expiryInput' })
        .then((h) => h?.type('03/33'));

      await frame
        .find({ type: SELECTOR_TYPE.ID, value: 'Field-cvcInput' })
        .then((h) => h?.type('333'));

      await frame
        .find({ type: SELECTOR_TYPE.ID, value: 'Field-postalCodeInput' })
        .then((h) => h?.type('12345'));

      await screen
        .find({ value: `${PAYMENT_METHOD_INPUT_NEW_TEST_ID}-form-submit` })
        .then((h) => h?.press());
      await screen.snapshot();
    } else {
      throw new NotFoundError('stripe frame');
    }
  };

  test('works with new payment card', async () => {
    const stop = await screen.record();

    await addProductsToCart();
    await screen.find({ value: PAYMENT_METHOD_INPUT_NEW_TEST_ID }).then((h) => h?.press());
    await screen.snapshot();
    await cardSubmit(TEST_CARD_NUMBER_VALID);
    await screen.find({ value: `${ORDER_PAYMENT_TEST_ID}-submit` }).then((h) => h?.press());
    await screen.snapshot();

    await stop();

    expect(true).toBeTruthy();
  });

  // test('works with existing payment card', async () => {
  //   await screen.open(`/${BILLING}/${PAYMENT_METHOD}`);
  //   await screen.find({ value: PAYMENT_METHOD_INPUT_NEW_TEST_ID }).then((h) => h?.press());
  //   await screen.snapshot();
  //   await cardSubmit(TEST_CARD_NUMBER_VALID);
  //   expect(true).toBeTruthy();
  // });
});
