import { type TimezoneModel } from '#lib-frontend/locale/locale.models';
import { type ReducerModel } from '#lib-frontend/state/state.models';

export type LocaleStateModel = {
  isTimezoneAutomatic?: boolean;
  timezone?: TimezoneModel;
};

export type LocaleActionsParamsModel = {
  isTimezoneAutomaticSet: boolean;
  timezoneSet: TimezoneModel;
};

export type LocaleReducerModel = ReducerModel<LocaleStateModel, LocaleActionsParamsModel>;
