import { type CountryConfigModel } from '@lib/config/country/country.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<CountryConfigModel>({
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

export default config;
