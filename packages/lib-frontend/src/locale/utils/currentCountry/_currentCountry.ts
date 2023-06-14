import geolocator from 'geolocator';

import type { _CurrentCountryModel } from '#lib-frontend/locale/utils/currentCountry/_currentCountry.models';

export const _currentCountry = async (): _CurrentCountryModel => {
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
