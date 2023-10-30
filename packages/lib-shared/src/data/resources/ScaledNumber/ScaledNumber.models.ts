import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { type SCALED_NUMBER_UNIT } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.constants';

export type ScaledNumberModel<TType extends NumberUnitModel> = {
  unit?: TType;
  value?: number;
};

export type ScaledNumberUnitModel = `${SCALED_NUMBER_UNIT}`;
