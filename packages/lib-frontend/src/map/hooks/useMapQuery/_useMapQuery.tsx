import toNumber from 'lodash/toNumber';
import { useState } from 'react';

import { useHttp } from '@lib-frontend/http/hooks/useHttp/useHttp';
import {
  type _UseMapQueryApiParamsModel,
  type _UseMapQueryApiResultModel,
  type _UseMapQueryModel,
} from '@lib-frontend/map/hooks/useMapQuery/_useMapQuery.models';
import { serializeAddress } from '@lib-frontend/map/hooks/useMapQuery/useMapQuery';
import { type MapQueryResultModel } from '@lib-frontend/map/hooks/useMapQuery/useMapQuery.models';
import { sort } from '@lib-shared/core/utils/sort/sort';

export const _useMapQuery = (): _UseMapQueryModel => {
  const { get } = useHttp();
  const [data, dataSet] = useState<Array<MapQueryResultModel>>([]);
  return {
    data,
    query: async (params) => {
      if (params) {
        const result = await get<_UseMapQueryApiParamsModel, _UseMapQueryApiResultModel>({
          params: { api_key: process.env.APP_GEOCODING_API_KEY, q: params },
          url: 'https://geocode.maps.co/search',
        });
        dataSet(
          result
            ? sort(result, [['importance', false]]).map(({ display_name, lat, lon }) => {
                const [label, latitude, longitude] = [display_name, toNumber(lat), toNumber(lon)];
                const id = serializeAddress({ label, latitude, longitude });
                return { id, label, latitude, longitude };
              })
            : [],
        );
      } else {
        dataSet([]);
      }
    },
  };
};