import { type InputRefModel, type InputPropsModel } from '@lib/frontend/data/data.models';
import { type ThemePresetsModel } from '@lib/frontend/style/style.models';
import { type RangeModel } from '@lib/shared/data/data.models';

export type _CalendarPickerPropsModel = ThemePresetsModel &
  (
    | ({ isRange?: true } & InputPropsModel<RangeModel<Date>>)
    | ({ isRange?: false } & InputPropsModel<Date>)
  );

export type _CalendarPickerRefModel = InputRefModel;
