import { type NumberFieldPropsModel } from '#lib-frontend/data/components/NumberField/NumberField.models';
import {
  type FieldPropsModel,
  type NumberUnitModel,
  type NumberUnitTypeModel,
} from '#lib-frontend/data/data.models';

export type ScaledNumberFieldPropsModel<TType extends NumberUnitModel> = FieldPropsModel<number> &
  Pick<NumberFieldPropsModel, 'keyboard'> & {
    defaultUnit?: TType;
    type?: NumberUnitTypeModel;
  };
