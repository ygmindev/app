import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface LocaleStateModel {
  countryCode?: string;
}

export interface LocaleActionsParamsModel {
  countryCodeSet: string;
}

export interface LocaleReducerModel
  extends ReducerModel<LocaleStateModel, LocaleActionsParamsModel> {}
