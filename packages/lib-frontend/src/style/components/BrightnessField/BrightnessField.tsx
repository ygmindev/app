import { SelectField } from '#lib-frontend/core/components/SelectField/SelectField';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { type BrightnessFieldPropsModel } from '#lib-frontend/style/components/BrightnessField/BrightnessField.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type StyleBrightnessStateModel } from '#lib-frontend/style/stores/styleStore/styleStore.models';
import { STYLE_BRIGHTNESS } from '#lib-frontend/style/style.constants';
import { STYLE } from '#lib-shared/style/style.constants';

export const BrightnessField: LFCModel<BrightnessFieldPropsModel> = ({
  elementState,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([STYLE]);
  const actions = useActions();
  const brightness = useStore((state) => state.style.brightness);
  return (
    <SelectField<StyleBrightnessStateModel>
      {...wrapperProps}
      elementState={elementState}
      isHorizontal
      onChange={(value) => actions?.style.brightness(value)}
      options={[
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
