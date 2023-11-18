import { type NumberFieldPropsModel } from '#lib-frontend/data/components/NumberField/NumberField.models';
import {
  type FieldPropsModel,
  type NumberUnitModel,
  type NumberUnitTypeModel,
  type ScaledValueModel,
} from '#lib-frontend/data/data.models';

export type ScaledNumberFieldPropsModel<TType extends NumberUnitModel> = FieldPropsModel<
  ScaledValueModel<TType>
> &
  Pick<NumberFieldPropsModel, 'keyboard'> & {
    type?: NumberUnitTypeModel;
  };
