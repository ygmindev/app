import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type ProductArgsModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type CommerceStateModel = {
  products?: Array<ProductArgsModel>;
};

export type CommerceActionsParamsModel = EmptyObjectModel;

export type CommerceReducerModel = ReducerModel<CommerceStateModel, CommerceActionsParamsModel>;
