import { type TimezoneModel } from '@lib/frontend/locale/locale.models';
import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type LocaleStateModel = {
  // TODO: more country info
  countryCode?: string;
  language?: string;
  timezone?: TimezoneModel;
};

export type LocaleActionsParamsModel = EmptyObjectModel;

export type LocaleReducerModel = ReducerModel<LocaleStateModel, LocaleActionsParamsModel>;
