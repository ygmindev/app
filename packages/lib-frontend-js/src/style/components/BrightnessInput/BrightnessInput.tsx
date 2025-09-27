import { type LFCModel } from '@lib/frontend/core/core.models';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type BrightnessInputPropsModel } from '@lib/frontend/style/components/BrightnessInput/BrightnessInput.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import { STYLE } from '@lib/shared/style/style.constants';

export const BrightnessInput: LFCModel<BrightnessInputPropsModel> = ({
  elementState,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([STYLE]);
  const [brightness, brightnessSet] = useStore('style.brightness');
  return (
    <SelectInput<STYLE_BRIGHTNESS>
      {...wrapperProps}
      elementState={elementState}
      onChange={brightnessSet}
      options={[
        {
          icon: 'monitor',
          id: STYLE_BRIGHTNESS.SYSTEM,
          label: t('settings:system'),
        },
        {
          icon: 'light',
          id: STYLE_BRIGHTNESS.LIGHT,
          label: t('style:light'),
        },
        {
          icon: 'dark',
          id: STYLE_BRIGHTNESS.DARK,
          label: t('style:dark'),
        },
      ]}
      value={brightness}
    />
  );
};
