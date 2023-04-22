import { LineGroup } from '@lib/frontend/core/components/LineGroup/LineGroup';
import { LineItem } from '@lib/frontend/core/components/LineItem/LineItem';
import { RadioField } from '@lib/frontend/core/components/RadioField/RadioField';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { SettingsGroupAppearancePropsModel } from '@lib/frontend/settings/containers/SettingsGroupAppearance/SettingsGroupAppearance.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { StyleBrightnessStateModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';
import { STYLE_BRIGHTNESS, THEME_SIZE } from '@lib/frontend/style/style.constants';

export const SettingsGroupAppearance: SFCModel<SettingsGroupAppearancePropsModel> = ({
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const actions = useActions();
  const brightness = useStore((state) => state.style.brightness);
  return (
    <LineGroup
      style={styles}
      testID={testID}
      title={t('settings:labels.appearance')}>
      <LineItem
        rightElement={() => (
          <Wrapper spacing={THEME_SIZE.SMALL}>
            <RadioField<StyleBrightnessStateModel>
              onChange={(value) => actions?.style.brightnessSet(value)}
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
