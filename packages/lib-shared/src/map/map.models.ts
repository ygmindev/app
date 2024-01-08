export type MapCoordinateModel = {
  latitude: number;
  longitude: number;
};

export type MapLocationModel = MapCoordinateModel & {
  label: string;
};
