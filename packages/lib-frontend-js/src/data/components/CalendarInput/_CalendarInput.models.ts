import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type ThemePresetsModel } from '@lib/frontend/style/style.models';
import { type RangeModel } from '@lib/shared/data/data.models';

export type _CalendarInputPropsModel = ThemePresetsModel &
  (
    | ({ isRange?: true } & InputPropsModel<RangeModel<Date> | undefined>)
    | ({ isRange?: false } & InputPropsModel<Date | undefined>)
  ) & {
    disable?(date: Date): boolean;
  };

export type _CalendarInputRefModel = InputRefModel;
