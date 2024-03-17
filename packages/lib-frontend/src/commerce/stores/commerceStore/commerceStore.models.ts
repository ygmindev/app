import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type ProductItemModel } from '@lib/shared/commerce/utils/ProductItem/ProductItem.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type CommerceStateModel = {
  products?: Array<ProductItemModel>;
};

export type CommerceActionsParamsModel = EmptyObjectModel;

export type CommerceReducerModel = ReducerModel<CommerceStateModel, CommerceActionsParamsModel>;
