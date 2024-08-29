import { type MapMarkerModel } from '@lib/frontend/map/components/Map/Map.models';
import { type CoordinateModel } from '@lib/shared/map/map.models';

export type _MapPropsModel = CoordinateModel & {
  markers?: Array<MapMarkerModel>;
  zoom: number;
};
