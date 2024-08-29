import { type PriceTierModel } from '@lib/shared/aroom/utils/PriceTier/PriceTier.models';

export type MapRouteModel = {
  distance: number;
  duration: number;
  polyline: string;
  priceTiers: Array<PriceTierModel>;
};
