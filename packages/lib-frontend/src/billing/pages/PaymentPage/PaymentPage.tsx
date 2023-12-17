import { FloatingFooter } from '#lib-frontend/app/components/FloatingFooter/FloatingFooter';
import { PaymentMethodItem } from '#lib-frontend/billing/components/PaymentMethodItem/PaymentMethodItem';
import { usePaymentMethodResource } from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type PaymentPagePropsModel } from '#lib-frontend/billing/pages/PaymentPage/PaymentPage.models';
import { ItemList } from '#lib-frontend/core/components/ItemList/ItemList';
import { ModalButton } from '#lib-frontend/core/components/ModalButton/ModalButton';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { sort } from '#lib-shared/core/utils/sort/sort';

export const PaymentPage: LFCModel<PaymentPagePropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const actions = useActions();
  const currentUser = useCurrentUser();
  const { wrapperProps } = useLayoutStyles({ props });
  const { push } = useRouter();
  const { getMany } = usePaymentMethodResource();

  const tPaymentMethod = t('billing:paymentMethod');
  const tPaymentMethodAdd = t('core:new', { value: tPaymentMethod });

  const query = async (): Promise<Array<PartialModel<PaymentMethodModel>> | undefined> => {
    const { result } = await getMany({ filter: [], root: currentUser?._id });
    const resultF =
      result &&
      sort(result, [(x) => currentUser?.paymentMethodPrimary !== x._id, ['created', false]]);
    resultF && actions?.billing.paymentMethodsSet(resultF);
    return resultF;
  };

  return (
    <MainLayout
      {...wrapperProps}
      p>
      <DataBoundary
        fallbackData={[]}
        id="paymentMethods"
        query={query}>
        {({ data }) => (
          <ItemList
            items={data?.map((value) => ({
              children: <PaymentMethodItem value={value} />,
              id: value._id ?? '',
            }))}
            title={t('billing:paymentMethod_plural')}
          />
        )}
      </DataBoundary>

      <FloatingFooter>
        <ModalButton
          element={() => <></>}
          icon="add"
          isShadow>
          {t('core:new', { value: PAYMENT_METHOD_RESOURCE_NAME })}
        </ModalButton>
      </FloatingFooter>
    </MainLayout>
  );
};
