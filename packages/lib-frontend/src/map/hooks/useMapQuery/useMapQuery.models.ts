import { type _UseMapQueryModel } from '#lib-frontend/map/hooks/useMapQuery/_useMapQuery.models';
import { type CoordinateModel } from '#lib-shared/map/map.models';

export type UseMapQueryModel = _UseMapQueryModel;

export type MapQueryResultModel = CoordinateModel & { label: string };
