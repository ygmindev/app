import type { _CountryModel } from '@lib/frontend/locale/utils/country/_country.models';
import geolocator from 'geolocator';

export const _country = async (): Promise<_CountryModel> => {
  geolocator.config({ language: 'en' });
  return new Promise((resovle, reject) =>
    geolocator.locate(
      { addressLookup: false, fallbackToIP: true, timezone: false },
      (e: Error, location?: { address?: { countryCode?: string } }) => {
        if (e) {
          reject(e);
        } else {
          resovle(location?.address?.countryCode ?? null);
        }
      },
    ),
  );
};
