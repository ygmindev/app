import { type AddToCartButtonPropsModel } from '@lib/frontend/commerce/components/AddToCartButton/AddToCartButton.models';
import { ProductItemForm } from '@lib/frontend/commerce/containers/ProductItemForm/ProductItemForm';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';

export const AddToCartButton: LFCModel<AddToCartButtonPropsModel> = ({ item, ...props }) => {
  const actions = useActions();
  const { success } = useNotification();
  const { t } = useTranslation([COMMERCE]);
  const [items] = useStore('commerce.items');

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
      element={({ onClose }) => <ProductItemForm onCancel={onClose} />}
      onPress={handleAdd}>
      {t('commerce:addToCart')}
    </ModalButton>
  );
};
