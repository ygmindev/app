import type { countries } from 'countries-list';

export interface CountryConfigModel {
  supportedCountries: Array<keyof typeof countries>;
}
