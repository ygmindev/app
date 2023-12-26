import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { BILLING } from '#lib-frontend/billing/billing.constants';
import { usePaymentMethodResource } from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type PaymentMethodPagePropsModel } from '#lib-frontend/billing/pages/PaymentMethodPage/PaymentMethodPage.models';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { FORM } from '#lib-frontend/data/data.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { RouteList } from '#lib-frontend/route/components/RouteList2/RouteList';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { getEntityResourceFixture } from '#lib-shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const PaymentMethodPage: LFCModel<PaymentMethodPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { t } = useTranslation([BILLING]);
  const { push } = useRouter();
  const { getMany } = usePaymentMethodResource();
  return (
    <MainLayout
      {...wrapperProps}
      isFullHeight
      p>
      <DataBoundary
        fallbackData={{
          result: getEntityResourceFixture({
            count: 3,
            data: (i) => ({ _id: i, title: 'test' }),
          }),
        }}
        id={PAYMENT_METHOD_RESOURCE_NAME}
        params={{ root: currentUser?._id }}
        query={getMany}>
        {({ data }) => (
          <RouteList
            root
            routes={data?.result?.map(({ _id }) => ({
              id: _id,
              pathname: _id ?? '',
              title: _id,
            }))}
            title={t('billing:paymentMethod_plural')}
          />
        )}
      </DataBoundary>

      <FloatingFooter>
        <Button
          icon="add"
          isShadow
          onPress={() => push({ pathname: FORM, root: true })}>
          {t('core:new', { value: PAYMENT_METHOD_RESOURCE_NAME })}
        </Button>
      </FloatingFooter>
    </MainLayout>
  );
};
