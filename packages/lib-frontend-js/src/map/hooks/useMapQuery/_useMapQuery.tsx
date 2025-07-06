import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import {
  type _UseMapQueryApiParamsModel,
  type _UseMapQueryApiResultModel,
  type _UseMapQueryModel,
} from '@lib/frontend/map/hooks/useMapQuery/_useMapQuery.models';
import { type MapQueryResultModel } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { sort } from '@lib/shared/core/utils/sort/sort';
import filter from 'lodash/filter';
import toNumber from 'lodash/toNumber';
import { useState } from 'react';

export const _useMapQuery = (): _UseMapQueryModel => {
  const { get } = useHttp();
  const [data, dataSet] = useState<Array<MapQueryResultModel>>([]);
  return {
    data,
    mutate: async (params) => {
      if (params) {
        const result = await get<_UseMapQueryApiParamsModel, _UseMapQueryApiResultModel>({
          params: { addressdetails: 1, format: 'json', q: params },
          url: 'https://nominatim.openstreetmap.org/search',
        });
        dataSet(
          result
            ? sort(
                filter(result, (v) => !!v?.address),
                [['importance', false]],
              ).map(({ address, display_name, lat, lon }) => ({
                address1: filterNil([address?.house_number, address?.road]).join(' '),
                city: address?.city,
                country: address?.country,
                countryCode: address?.country_code ? address.country_code.toUpperCase() : undefined,
                latitude: lat ? toNumber(lat) : undefined,
                longitude: lon ? toNumber(lon) : undefined,
                name: display_name,
                postalCode: address?.postcode,
                province: address?.state,
              }))
            : [],
        );
      } else {
        dataSet([]);
      }
    },
  };
};
