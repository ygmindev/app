import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { Text } from '#lib-frontend/core/components/Text/Text';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { TimezoneField } from '#lib-frontend/locale/components/TimezoneField/TimezoneField';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import type { SettingsLocalePropsModel } from '#lib-frontend/settings/containers/SettingsLocale/SettingsLocale.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const SettingsLocale: SFCModel<SettingsLocalePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  return (
    <LineGroup
      style={styles}
      testID={testID}
      title={t('locale:location')}>
      <LineItem
        icon="time"
        rightElement={() => <TimezoneField />}>
        <Text>{t('locale:timezone')}</Text>
      </LineItem>
    </LineGroup>
  );
};
