import { type FCModel } from '@lib/frontend/core/core.models';
import { type _MapPropsModel } from '@lib/frontend/map/components/Map/_Map.models';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export const _Map: FCModel<_MapPropsModel> = ({ latitude, longitude, markers, zoom }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.SERVER_APP_GOOGLE_API_KEY,
    id: 'map',
  });
  return (
    isLoaded && (
      <GoogleMap
        center={{ lat: latitude ?? 0, lng: longitude ?? 0 }}
        mapContainerStyle={{ flex: 1 }}
        zoom={zoom}>
        {markers?.map((marker) => (
          <Marker position={{ lat: marker.latitude ?? 0, lng: marker.longitude ?? 0 }} />
        ))}
      </GoogleMap>
    )
  );
};
