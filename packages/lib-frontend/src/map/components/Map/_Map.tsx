import BingMapsReact from 'bingmaps-react';

import { type FCModel } from '#lib-frontend/core/core.models';
import { type _MapPropsModel } from '#lib-frontend/map/components/Map/_Map.models';

export const _Map: FCModel<_MapPropsModel> = ({ latitude, longitude, styling, zoom }) => {
  return (
    <BingMapsReact
      bingMapsKey={process.env.APP_BINGMAPS_API_KEY}
      mapOptions={{
        customMapStyle: {
          elements: {
            point: {
              fillColor: styling.color,
              strokeColor: styling.borderColor,
            },
            road: {
              fillColor: styling.color,
              strokeColor: styling.borderColor,
            },
          },
        },
        navigationBarMode: 'square',
        showMapTypeSelector: false,
      }}
      pushPins={[{ center: { latitude, longitude } }]}
      viewOptions={{
        center: { latitude, longitude },
        mapTypeId: 'road',
        zoom,
      }}></BingMapsReact>
  );
};
