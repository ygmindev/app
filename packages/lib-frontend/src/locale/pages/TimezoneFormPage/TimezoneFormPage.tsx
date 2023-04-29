import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { SwitchField } from '@lib/frontend/form/components/SwitchField/SwitchField';
import { TimezoneField } from '@lib/frontend/locale/components/TimezoneField/TimezoneField';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { TimezoneFormPagePropsModel } from '@lib/frontend/locale/pages/TimezoneFormPage/TimezoneFormPage.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const TimezoneFormPage: SFCModel<TimezoneFormPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const actions = useActions();
  const _timezoneIsAutomatic = useStore((state) => state.locale.timezoneIsAutomatic);

  return (
    <MainLayout
      isCenter
      style={styles}
      testID={testID}>
      <SwitchField
        label={t('settings:labels.setAutomatically')}
        onChange={(value) =>
          actions?.locale.timezoneIsAutomaticSet(value === 'true' ? true : false)
        }
        value={_timezoneIsAutomatic ? 'true' : 'false'}
      />

      <TimezoneField elementState={_timezoneIsAutomatic ? ELEMENT_STATE.DISABLED : undefined} />
    </MainLayout>
  );
};