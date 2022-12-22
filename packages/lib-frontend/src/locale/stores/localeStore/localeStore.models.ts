import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface LocaleStateModel {}

export interface LocaleActionsParamsModel {}

export interface LocaleReducerModel
  extends ReducerModel<LocaleStateModel, LocaleActionsParamsModel> {}
