import { TIMING, VEHICLE_TYPE } from '@lib/shared/aroom/aroom.constants';
import { type TimingModel, type VehicleTypeModel } from '@lib/shared/aroom/aroom.models';

export const PRICING_TABLE: Record<
  VehicleTypeModel,
  Record<TimingModel, { base: number; min: number; perMile: number; perMinute: number }>
> = {
  [VEHICLE_TYPE.CAR]: {
    [TIMING.RUSH]: {
      base: 0,
      min: 8,
      perMile: 1.62,
      perMinute: 0.74,
    },
    [TIMING.SAME_DAY]: {
      base: 0,
      min: 7,
      perMile: 1.22,
      perMinute: 0.54,
    },
  },
  [VEHICLE_TYPE.CARGO_VAN]: {
    [TIMING.RUSH]: {
      base: 3.85,
      min: 10.5,
      perMile: 2.35,
      perMinute: 0.77,
    },
    [TIMING.SAME_DAY]: {
      base: 2.85,
      min: 9.5,
      perMile: 2.15,
      perMinute: 0.57,
    },
  },
  [VEHICLE_TYPE.SPRINTER_VAN]: {
    [TIMING.RUSH]: {
      base: 14.75,
      min: 25,
      perMile: 4.5,
      perMinute: 1.32,
    },
    [TIMING.SAME_DAY]: {
      base: 13.75,
      min: 24,
      perMile: 4.3,
      perMinute: 1.12,
    },
  },
};
