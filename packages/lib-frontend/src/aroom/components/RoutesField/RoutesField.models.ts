import { type FieldPropsModel, type FieldRefModel } from '#lib-frontend/data/data.models';
import { type CoordinateModel } from '#lib-shared/map/utils/Coordinate/Coordinate.models';

export type RoutesFieldPropsModel = FieldPropsModel<Array<CoordinateModel>>;

export type RoutesFieldRefModel = FieldRefModel<Array<CoordinateModel>>;
