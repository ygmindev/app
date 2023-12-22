import { usePaymentMethodResource } from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type PaymentMethodPagePropsModel } from '#lib-frontend/billing/pages/PaymentMethodPage/PaymentMethodPage.models';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RouteList } from '#lib-frontend/route/components/RouteList2/RouteList';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { RESOURCE } from '#lib-shared/resource/resource.constants';

export const PaymentMethodPage: LFCModel<PaymentMethodPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { t } = useTranslation([RESOURCE]);
  const { getMany } = usePaymentMethodResource();
  return (
    <MainLayout
      {...wrapperProps}
      isFullHeight
      p>
      <DataBoundary
        id={PAYMENT_METHOD_RESOURCE_NAME}
        params={{ root: currentUser?._id }}
        query={getMany}>
        {() => (
          <RouteList
            root
            routes={[]}
            title={t('resource:resource_plural')}
          />
        )}
      </DataBoundary>
    </MainLayout>
  );
};
