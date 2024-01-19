import { type FieldPropsModel, type FieldRefModel } from '@lib/frontend/data/data.models';
import { type ThemePresetsModel } from '@lib/frontend/style/style.models';
import { type RangeModel } from '@lib/shared/data/data.models';

export type _CalendarPickerPropsModel = ThemePresetsModel &
  (
    | ({ isRange?: true } & FieldPropsModel<RangeModel<Date>>)
    | ({ isRange?: false } & FieldPropsModel<Date>)
  );

export type _CalendarPickerRefModel = FieldRefModel;
