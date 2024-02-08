import { FloatingFooter } from '@lib/frontend/app/components/FloatingFooter/FloatingFooter';
import { BILLING } from '@lib/frontend/billing/billing.constants';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type PaymentMethodPagePropsModel } from '@lib/frontend/billing/pages/PaymentMethodPage/PaymentMethodPage.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { type DataBoundaryRefModel } from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { FORM } from '@lib/frontend/data/data.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import { useRef } from 'react';

export const PaymentMethodPage: LFCModel<PaymentMethodPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { t } = useTranslation([BILLING]);
  const { push } = useRouter();
  const { getMany } = usePaymentMethodResource();
  const { remove: bankRemove } = useBankResource({ root: currentUser?._id });
  const { remove: cardRemove } = useCardResource({ root: currentUser?._id });
  const ref =
    useRef<
      DataBoundaryRefModel<
        OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>
      >
    >(null);
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
        query={getMany}
        ref={ref}>
        {({ data }) => (
          <ItemList
            items={data?.result?.map(({ _id, last4, name, type }) => ({
              icon:
                type === PAYMENT_METHOD_TYPE.BANK
                  ? 'bank'
                  : type === PAYMENT_METHOD_TYPE.CARD
                    ? 'card'
                    : undefined,
              id: _id ?? '',
              last4,
              name,
              title: t('billing:paymentMethodTitle', { last4, name }),
              type,
            }))}
            rightElement={({ item }) => (
              <Button
                color={THEME_COLOR.ERROR}
                confirmMessage={t('core:confirmRemove', {
                  value: t('billing:paymentMethodTitle', { last4: item.last4, name: item.name }),
                })}
                icon="trash"
                iconText={t('core:remove')}
                onPress={async () => {
                  switch (item.type) {
                    case PAYMENT_METHOD_TYPE.BANK:
                      await bankRemove({ filter: [{ field: '_id', value: item.id }] });
                    case PAYMENT_METHOD_TYPE.CARD:
                      await cardRemove({ filter: [{ field: '_id', value: item.id }] });
                  }
                }}
              />
            )}
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
