import { type CoordinateModel } from '#lib-shared/map/map.models';

export type _MapPropsModel = CoordinateModel & {
  styling: {
    borderColor: string;
    color: string;
  };
  zoom: number;
};
