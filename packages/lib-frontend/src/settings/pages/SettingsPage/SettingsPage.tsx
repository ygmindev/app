import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { SETTINGS_NAVBAR_OPTIONS } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage.constants';
import type { SettingsPagePropsModel } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SETTINGS } from '@lib/shared/settings/settings.constants';
import { useEffect, useMemo } from 'react';

export const SettingsPage: SFCModel<SettingsPagePropsModel> = ({ children, testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { isActive, push, replace } = useRouter();

  const _value = useMemo(
    () => SETTINGS_NAVBAR_OPTIONS.find(({ id }) => isActive({ pathname: `/${SETTINGS}/${id}` })),
    [isActive],
  );
  useEffect(() => {
    !_value && replace({ pathname: `${SETTINGS}/${SETTINGS_NAVBAR_OPTIONS[0].id}` });
  }, [_value]);

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <NavigationLayout
        barElement={<Text type={FONT_TYPE.HEADLINE}>{t('settings:labels.settings')}</Text>}
        onChange={(value) => push({ pathname: `/${SETTINGS}/${value}` })}
        options={SETTINGS_NAVBAR_OPTIONS}
        value={_value?.id}>
        <Wrapper
          grow
          spacing>
          {children}
        </Wrapper>
      </NavigationLayout>
    </Wrapper>
  );
};
