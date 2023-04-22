import type { CountryFormatModel } from '@lib/frontend/locale/locale.models';

export interface _GetCountriesParamsModel {
  format?: CountryFormatModel;
}

export type _GetCountriesModel = Array<string>;
