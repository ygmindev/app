import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type CommerceStateModel = {
  cart?: Array<{ pricingId: string; productId: string; quantity?: number }>;
};

export type CommerceActionsParamsModel = EmptyObjectModel;

export type CommerceReducerModel = ReducerModel<CommerceStateModel, CommerceActionsParamsModel>;
