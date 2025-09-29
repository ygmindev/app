import { type TimezoneModel } from '@lib/frontend/locale/locale.models';
import { type ReducerModel } from '@lib/frontend/state/state.models';

export type LocaleStateModel = {
  // TODO: more country info
  countryCode?: string;
  language?: string;
  timezone?: TimezoneModel;
};

export type LocaleReducerModel = ReducerModel<LocaleStateModel>;
