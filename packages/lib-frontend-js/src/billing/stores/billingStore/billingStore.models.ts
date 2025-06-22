import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type BillingStateModel = {};

export type BillingActionsParamsModel = EmptyObjectModel;

export type BillingReducerModel = ReducerModel<BillingStateModel, BillingActionsParamsModel>;
