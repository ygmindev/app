import { type TimezoneModel } from '@lib/frontend/locale/locale.models';
import { type SliceModel } from '@lib/frontend/state/state.models';

export type LocaleStateModel = {
  // TODO: more country info
  countryCode?: string;
  language?: string;
  timezone?: TimezoneModel;
};

export type LocaleReducerModel = SliceModel<LocaleStateModel>;
