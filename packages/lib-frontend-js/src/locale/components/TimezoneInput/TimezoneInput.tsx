import { type LFCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { type TimezoneInputPropsModel } from '@lib/frontend/locale/components/TimezoneInput/TimezoneInput.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { timezones } from '@lib/frontend/locale/utils/timezones/timezones';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { timezoneFormat } from '@lib/shared/datetime/utils/timezoneFormat/timezoneFormat';
import { useMemo } from 'react';

export const TimezoneInput: LFCModel<TimezoneInputPropsModel> = ({
  defaultValue,
  elementState,
  onChange,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const [timezone] = useStore('locale.timezone');
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

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
    <MenuInput
      {...wrapperProps}
      elementState={elementState}
      icon="time"
      label={t('locale:timezone')}
      onChange={valueControlledSet}
      options={options}
      value={valueControlled}
    />
  );
};
