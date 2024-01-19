import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { type CountryConfigModel } from '@lib/config/locale/country/country.models';

const { _config, config } = defineConfig({
  config: {
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
  } satisfies CountryConfigModel,
});

export { _config, config };
