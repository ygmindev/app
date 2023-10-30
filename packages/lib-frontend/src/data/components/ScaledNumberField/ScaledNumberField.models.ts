import { type NumberFieldPropsModel } from '#lib-frontend/data/components/NumberField/NumberField.models';
import { type FieldPropsModel, type NumberUnitModel } from '#lib-frontend/data/data.models';
import {
  type ScaledNumberModel,
  type ScaledNumberUnitModel,
} from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.models';

export type ScaledNumberFieldPropsModel<TType extends NumberUnitModel> = FieldPropsModel<
  ScaledNumberModel<TType>
> &
  Pick<NumberFieldPropsModel, 'keyboard'> & {
    type?: ScaledNumberUnitModel;
  };
