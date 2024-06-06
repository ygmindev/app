import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';

export type AddToCartButtonPropsModel = ButtonPropsModel & {
  item: ProductItemModel;
};
