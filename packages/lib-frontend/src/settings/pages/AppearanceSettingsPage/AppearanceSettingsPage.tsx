import { SelectField } from '#lib-frontend/core/components/SelectField/SelectField';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type AppearanceSettingsPagePropsModel } from '#lib-frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage.models';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type StyleBrightnessStateModel } from '#lib-frontend/style/stores/styleStore/styleStore.models';
import { STYLE_BRIGHTNESS } from '#lib-frontend/style/style.constants';
import { STYLE } from '#lib-shared/style/style.constants';

export const AppearanceSettingsPage: LFCModel<AppearanceSettingsPagePropsModel> = ({
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([STYLE]);
  const actions = useActions();
  const brightness = useStore((state) => state.style.brightness);
  return (
    <MainLayout
      {...wrapperProps}
      flex
      p>
      <SelectField<StyleBrightnessStateModel>
        isHorizontal
        label={t('style:brightness')}
        onChange={(value) => actions?.style.brightnessSet(value)}
        options={[
          {
            icon: 'light',
            id: STYLE_BRIGHTNESS.LIGHT,
            label: ({ t }) => t('style:light'),
          },
          {
            icon: 'dark',
            id: STYLE_BRIGHTNESS.DARK,
            label: ({ t }) => t('style:dark'),
          },
        ]}
        value={brightness}
      />
    </MainLayout>
  );
};
