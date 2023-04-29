import { RadioField } from '@lib/frontend/core/components/RadioField/RadioField';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { BrightnessFormPagePropsModel } from '@lib/frontend/style/pages/BrightnessFormPage/BrightnessFormPage.models';
import type { StyleBrightnessStateModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';

export const BrightnessFormPage: FCModel<BrightnessFormPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const actions = useActions();
  const brightness = useStore((state) => state.style.brightness);
  return (
    <MainLayout
      isCenter
      style={styles}
      testID={testID}>
      <Wrapper
        grow
        isCenter>
        <RadioField<StyleBrightnessStateModel>
          isHorizontal
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
    </MainLayout>
  );
};
