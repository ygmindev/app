import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type AddToCartButtonPropsModel = ButtonPropsModel & {
  item: PartialModel<ProductItemModel>;
};
