import { PriceTier } from '@lib/backend/aroom/utils/PriceTier/PriceTier';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type PriceTierModel } from '@lib/shared/aroom/utils/PriceTier/PriceTier.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { MAP_ROUTE_RESOURCE } from '@lib/shared/map/resources/MapRoute/MapRoute.constants';
import { type MapRouteModel } from '@lib/shared/map/resources/MapRoute/MapRoute.models';

@withEntity({ name: MAP_ROUTE_RESOURCE })
export class MapRoute implements MapRouteModel {
  @withField({ type: DATA_TYPE.NUMBER })
  distance!: number;

  @withField({ type: DATA_TYPE.NUMBER })
  duration!: number;

  @withField({ type: DATA_TYPE.STRING })
  polyline!: string;

  @withField({ Resource: () => PriceTier, isArray: true, type: PROPERTY_TYPE.RESOURCE })
  priceTiers!: Array<PriceTierModel>;
}
