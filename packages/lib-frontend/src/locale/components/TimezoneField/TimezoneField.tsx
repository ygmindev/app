import type { SFCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import type { TimezoneFieldPropsModel } from '@lib/frontend/locale/components/TimezoneField/TimezoneField.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { timezones } from '@lib/frontend/locale/utils/timezones/timezones';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { timezoneFormat } from '@lib/shared/format/utils/timezoneFormat/timezoneFormat';
import { useMemo } from 'react';

export const TimezoneField: SFCModel<TimezoneFieldPropsModel> = ({
  defaultValue,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue,
    onChange,
    value,
  });
  const _timezone = useStore((state) => state.locale.timezone);

  useAsync({
    onMount: async () => {
      _timezone && valueControlledSet(_timezone.name);
    },
  });

  const _options = useMemo(
    () =>
      timezones().map(({ name, offset }) => ({
        id: timezoneFormat(name),
        label: timezoneFormat({ name, offset }),
      })),
    [],
  );

  return (
    <SelectField
      {...props}
      icon="time"
      label={t('locale:labels.timezone')}
      onChange={valueControlledSet}
      options={_options}
      style={styles}
      testID={testID}
      value={valueControlled}
    />
  );
};
