import { type MapCoordinateModel } from '#lib-shared/map/map.models';

export type _MapPropsModel = MapCoordinateModel & {
  styling: {
    borderColor: string;
    color: string;
  };
  zoom: number;
};
