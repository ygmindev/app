import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type CartItemModel } from '@lib/shared/commerce/utils/CartItem/CartItem.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type CommerceStateModel = {
  items?: Array<CartItemModel>;
};

export type CommerceActionsParamsModel = EmptyObjectModel;

export type CommerceReducerModel = ReducerModel<CommerceStateModel, CommerceActionsParamsModel>;
