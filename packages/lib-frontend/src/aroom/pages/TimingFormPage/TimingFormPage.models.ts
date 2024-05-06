import { type PagePropsModel } from '@lib/frontend/core/core.models';
import { type MapRouteModel } from '@lib/shared/map/resources/MapRoute/MapRoute.models';
import { type CoordinateModel } from '@lib/shared/map/utils/Coordinate/Coordinate.models';

export type TimingFormPagePropsModel = PagePropsModel;

export type TimingFormPageParamsModel = MapRouteModel & {
  coordinates?: Array<CoordinateModel>;
};
