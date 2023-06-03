import type { TimezoneModel } from '@lib/frontend/locale/locale.models';
import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface LocaleStateModel {
  timezone?: TimezoneModel;
  isTimezoneAutomatic?: boolean;
}

export interface LocaleActionsParamsModel {
  isTimezoneAutomaticSet: boolean;
  timezoneSet: TimezoneModel;
}

export interface LocaleReducerModel
  extends ReducerModel<LocaleStateModel, LocaleActionsParamsModel> {}
