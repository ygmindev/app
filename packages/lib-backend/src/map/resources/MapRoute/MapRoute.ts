import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { MAP_ROUTE_RESOURCE } from '#lib-shared/map/resources/MapRoute/MapRoute.constants';
import { type MapRouteModel } from '#lib-shared/map/resources/MapRoute/MapRoute.models';

@withEntity({ name: MAP_ROUTE_RESOURCE })
export class MapRoute implements MapRouteModel {
  @withField({ type: DATA_TYPE.NUMBER })
  price!: number;
}
