import { type AdminHomePagePropsModel } from '@lib/frontend/admin/pages/AdminHomePage/AdminHomePage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { type LFCModel, type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { RESOURCE } from '@lib/shared/resource/resource.constants';

export const AdminHomePage: LFCModel<AdminHomePagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([RESOURCE]);
  const options: Array<TranslatableOptionModel> = [
    {
      icon: 'database',
      id: 'resources',
      label: t('resource:resource_plural'),
    },
  ];

  return (
    <NavigationLayout
      {...wrapperProps}
      options={options}>
      <Text>admin</Text>
    </NavigationLayout>
  );
};
