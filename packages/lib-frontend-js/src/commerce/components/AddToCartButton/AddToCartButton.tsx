import { ORDER } from '@lib/frontend/commerce/commerce.constants';
import { ADD_TO_CART_BUTTON_TEST_ID } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.constants';
import { type AddToCartButtonPropsModel } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.models';
import { ProductItemInput } from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { type ModalButtonRefModel } from '@lib/frontend/core/components/ModalButton/ModalButton.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { useRef } from 'react';

export const AddToCartButton: LFCModel<AddToCartButtonPropsModel> = ({ item, ...props }) => {
  const actions = useActions();
  const { success } = useNotification();
  const { t } = useTranslation([COMMERCE]);
  const [items] = useStore('commerce.items');
  const { push } = useRouter();
  const ref = useRef<ModalButtonRefModel>(null);

  const handleAdd = async (): Promise<void> => {
    const i = items?.findIndex(
      (v) => v.productId === item.productId && v.pricingId === item.pricingId,
    );
    const itemF = i !== undefined && items?.[i];
    itemF
      ? actions?.commerce.itemsUpdate([i, { ...itemF, quantity: (itemF.quantity ?? 1) + 1 }])
      : actions?.commerce.itemsAdd(item);
    void success({ description: t('core:addedSuccess', { value: item.name }) });
  };

  return (
    <ModalButton
      {...props}
      element={() => (
        <MainLayout s>
          <ProductItemInput />

          <Button
            onPress={() => {
              ref.current?.toggle(false);
              push({ pathname: ORDER });
            }}>
            {t('commerce:order')}
          </Button>
        </MainLayout>
      )}
      onPress={handleAdd}
      ref={ref}
      testID={`${ADD_TO_CART_BUTTON_TEST_ID}-${item.productId}-${item.pricingId}`}>
      {t('commerce:addToCart')}
    </ModalButton>
  );
};
