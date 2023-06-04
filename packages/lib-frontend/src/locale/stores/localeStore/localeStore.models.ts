import type { TimezoneModel } from '@lib/frontend/locale/locale.models';
import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface LocaleStateModel {
  isTimezoneAutomatic?: boolean;
  timezone?: TimezoneModel;
}

export interface LocaleActionsParamsModel {
  isTimezoneAutomaticSet: boolean;
  timezoneSet: TimezoneModel;
}

export interface LocaleReducerModel
  extends ReducerModel<LocaleStateModel, LocaleActionsParamsModel> {}
