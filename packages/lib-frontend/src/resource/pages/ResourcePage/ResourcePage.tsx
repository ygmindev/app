import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { RESOURCE_PAGE_ROUTES } from '@lib/frontend/resource/pages/ResourcePage/ResourcePage.constants';
import { type ResourcePagePropsModel } from '@lib/frontend/resource/pages/ResourcePage/ResourcePage.models';
import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { RESOURCE } from '@lib/shared/resource/resource.constants';

export const ResourcePage: LFCModel<ResourcePagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([RESOURCE]);
  return (
    <MainLayout {...wrapperProps}>
      <RouteList
        root
        routes={RESOURCE_PAGE_ROUTES}
        title={t('resource:resource_plural')}
      />
    </MainLayout>
  );
};
