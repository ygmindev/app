import { LineGroup } from '@lib/frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '@lib/frontend/core/components/LineItem/LineItem';
import { RadioField } from '@lib/frontend/core/components/RadioField/RadioField';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { SettingsGroupAppearancePropsModel } from '@lib/frontend/settings/containers/SettingsGroupAppearance/SettingsGroupAppearance.models';
import { useBrightness } from '@lib/frontend/style/hooks/useBrightness/useBrightness';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { StyleBrightnessStateModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';
import { STYLE_BRIGHTNESS, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { DEVICE } from '@lib/shared/user/user.constants';

export const SettingsGroupAppearance: SFCModel<SettingsGroupAppearancePropsModel> = ({
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const [brightness, brightnessSet] = useBrightness();
  return (
    <LineGroup
      style={styles}
      testID={testID}
      title={t('settings:labels.appearance')}>
      <LineItem
        rightElement={() => (
          <Wrapper spacing={THEME_SIZE.SMALL}>
            <RadioField<StyleBrightnessStateModel>
              onChange={brightnessSet}
              options={[
                {
                  icon: 'light',
                  id: STYLE_BRIGHTNESS.LIGHT,
                  label: ({ t }) => t('style:labels.light'),
                },
                {
                  icon: 'dark',
                  id: STYLE_BRIGHTNESS.DARK,
                  label: ({ t }) => t('style:labels.dark'),
                },
                { icon: 'device', id: DEVICE, label: ({ t }) => t('account:labels.device') },
              ]}
              value={brightness}
            />
          </Wrapper>
        )}>
        <Text>{t('settings:labels.brightness')}</Text>
      </LineItem>
    </LineGroup>
  );
};
