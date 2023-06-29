import { type countries } from 'countries-list';

export type CountryConfigModel = {
  supportedCountries: Array<keyof typeof countries>;
};
