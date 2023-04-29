import type { TimezoneModel } from '@lib/frontend/locale/locale.models';
import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface LocaleStateModel {
  timezone?: TimezoneModel;
  timezoneIsAutomatic?: boolean;
}

export interface LocaleActionsParamsModel {
  timezoneIsAutomaticSet: boolean;
  timezoneSet: TimezoneModel;
}

export interface LocaleReducerModel
  extends ReducerModel<LocaleStateModel, LocaleActionsParamsModel> {}
