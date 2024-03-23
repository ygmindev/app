import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';

export type PaymentMethodInputPropsModel = InputPropsModel & {
  products?: Array<ProductItemModel>;
};

export type PaymentMethodInputRefModel = InputRefModel;
