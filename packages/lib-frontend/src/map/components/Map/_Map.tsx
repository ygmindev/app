import GoogleMapReact from 'google-map-react';

import { type FCModel } from '@lib-frontend/core/core.models';
import { type _MapPropsModel } from '@lib-frontend/map/components/Map/_Map.models';

export const _Map: FCModel<_MapPropsModel> = ({ latitude, longitude, styling, zoom }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.SERVER_APP_GOOGLE_API_KEY }}
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={zoom}></GoogleMapReact>
  );
};
