import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type ProductSummaryModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type CommerceStateModel = {
  products?: Array<ProductSummaryModel>;
};

export type CommerceActionsParamsModel = EmptyObjectModel;

export type CommerceReducerModel = ReducerModel<CommerceStateModel, CommerceActionsParamsModel>;
