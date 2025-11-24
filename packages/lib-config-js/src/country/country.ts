import { type CountryConfigModel } from '@lib/config/country/country.models';
import { Config } from '@lib/config/utils/Config/Config';

export const countryConfig = new Config<CountryConfigModel>({
  params: () => ({
    supportedCountries: [
      'US',
      'AR',
      'AU',
      'BE',
      'BR',
      'CA',
      'CN',
      'ES',
      'FR',
      'GB',
      'DE',
      'ID',
      'IE',
      'IL',
      'IN',
      'IT',
      'JP',
      'KR',
      'MX',
      'NZ',
      'NO',
      'PL',
      'RU',
      'SA',
      'SE',
      'SG',
      'SZ',
      'TH',
      'TR',
      'TW',
    ],
  }),
});
