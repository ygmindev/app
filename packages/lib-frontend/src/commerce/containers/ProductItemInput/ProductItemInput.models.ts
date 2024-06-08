import {
  type TableInputPropsModel,
  type TableInputRefModel,
} from '@lib/frontend/data/components/TableInput/TableInput.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type ProductItemInputPropsModel = Pick<
  TableInputPropsModel<PartialModel<ProductItemModel>>,
  'defaultValue' | 'onChange' | 'value'
>;

export type ProductItemInputRefModel = TableInputRefModel<PartialModel<ProductItemModel>>;
