import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type CommerceStateModel = {
  items?: PartialArrayModel<ProductItemModel>;
};

export type CommerceReducerModel = ReducerModel<CommerceStateModel>;
