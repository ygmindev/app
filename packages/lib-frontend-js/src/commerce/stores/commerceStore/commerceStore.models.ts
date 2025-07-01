import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type ProductItemModel } from '@lib/model/commerce/ProductItem/ProductItem.models';
import { type EmptyObjectModel, type PartialModel } from '@lib/shared/core/core.models';

export type CommerceStateModel = {
  items?: Array<PartialModel<ProductItemModel>>;
};

export type CommerceActionsParamsModel = EmptyObjectModel;

export type CommerceReducerModel = ReducerModel<CommerceStateModel, CommerceActionsParamsModel>;
