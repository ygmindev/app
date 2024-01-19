import { Wrapper } from '@lib-frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib-frontend/core/core.models';
import { _CalendarPicker } from '@lib-frontend/data/components/CalendarPicker/_CalendarPicker';
import {
  type CalendarPickerPropsModel,
  type CalendarPickerRefModel,
} from '@lib-frontend/data/components/CalendarPicker/CalendarPicker.models';
import { useValueControlled } from '@lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { TranslatableText } from '@lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '@lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useThemePresets } from '@lib-frontend/style/hooks/useThemePresets/useThemePresets';
import { THEME_SIZE } from '@lib-frontend/style/style.constants';
import { variableName } from '@lib-shared/core/utils/variableName/variableName';
import { forwardRef } from 'react';

export const CalendarPicker: RLFCModel<CalendarPickerRefModel, CalendarPickerPropsModel> =
  forwardRef(({ defaultValue, isRange, label, onChange, value, ...props }, _) => {
    const themePresets = useThemePresets();
    const { wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    return (
      <Wrapper
        {...wrapperProps}
        s={THEME_SIZE.SMALL}>
        {label && <TranslatableText>{label}</TranslatableText>}

        {/* TODO: fix typing */}
        <_CalendarPicker
          {...themePresets}
          isRange={isRange as never}
          onChange={valueControlledSet as never}
          value={valueControlled as never}
        />
      </Wrapper>
    );
  });

process.env.APP_IS_DEBUG && (CalendarPicker.displayName = variableName({ CalendarPicker }));
