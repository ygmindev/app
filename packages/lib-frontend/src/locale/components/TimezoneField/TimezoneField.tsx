import { useMemo } from 'react';

import { type LFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { SelectField } from '#lib-frontend/form/components/SelectField/SelectField';
import { useValueControlled } from '#lib-frontend/form/hooks/useValueControlled/useValueControlled';
import { type TimezoneFieldPropsModel } from '#lib-frontend/locale/components/TimezoneField/TimezoneField.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { timezones } from '#lib-frontend/locale/utils/timezones/timezones';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { timezoneFormat } from '#lib-shared/format/utils/timezoneFormat/timezoneFormat';

export const TimezoneField: LFCModel<TimezoneFieldPropsModel> = ({
  defaultValue,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const timezone = useStore((state) => state.locale.timezone);

  useAsync(async () => {
    timezone && valueControlledSet(timezone.name);
  });

  const options = useMemo(
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
      label={t('locale:timezone')}
      onChange={valueControlledSet}
      options={options}
      style={styles}
      testID={testID}
      value={valueControlled}
    />
  );
};
