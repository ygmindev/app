import { BILLING } from '@lib/frontend/billing/billing.constants';
import { NewPaymentMethodForm } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type PaymentMethodPagePropsModel } from '@lib/frontend/billing/pages/PaymentMethodPage/PaymentMethodPage.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { type DataBoundaryRefModel } from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';
import { useRef } from 'react';

export const PaymentMethodPage: LFCModel<PaymentMethodPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { t } = useTranslation([BILLING]);
  const { getMany } = usePaymentMethodResource();
  const { remove: bankRemove } = useBankResource({ root: currentUser?._id });
  const { remove: cardRemove } = useCardResource({ root: currentUser?._id });
  const [paymentMethods, paymentMethodsSet] = useStore('billing.paymentMethods');
  const ref = useRef<DataBoundaryRefModel<Array<PartialModel<PaymentMethodModel>>>>(null);
  return (
    <MainLayout
      {...wrapperProps}
      isFullHeight
      p>
      <Wrapper
        isRow
        justify={FLEX_JUSTIFY.END}>
        <ModalButton
          element={({ onClose }) => (
            <NewPaymentMethodForm
              onCancel={onClose}
              onSuccess={async () => {
                ref.current?.reset && (await ref.current.reset());
                onClose();
              }}
            />
          )}
          icon="add"
          size={THEME_SIZE.SMALL}>
          {t('core:new', { value: t('billing:paymentMethod') })}
        </ModalButton>
      </Wrapper>

      <DataBoundary
        fallbackData={getEntityResourceFixture({
          count: 3,
          data: (i) => ({ _id: i, title: 'test' }),
        })}
        id={PAYMENT_METHOD_RESOURCE_NAME}
        query={async () => {
          if (paymentMethods?.length) {
            return paymentMethods;
          }
          const paymentMethodsF = (await getMany({ root: currentUser?._id })).result;
          paymentMethodsSet(paymentMethodsF);
          return paymentMethodsF;
        }}
        ref={ref}>
        {({ data }) => (
          <ItemList
            items={data?.map(({ _id, last4, name, type }) => ({
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
                onPress={async () => {
                  switch (item.type) {
                    case PAYMENT_METHOD_TYPE.BANK:
                      await bankRemove({ filter: [{ field: '_id', value: item.id }] });
                    case PAYMENT_METHOD_TYPE.CARD:
                      await cardRemove({ filter: [{ field: '_id', value: item.id }] });
                  }
                  ref.current?.reset && (await ref.current.reset());
                }}
                tooltip={t('core:remove')}
                type={BUTTON_TYPE.INVISIBLE}
              />
            )}
            title={t('billing:paymentMethod_other')}
          />
        )}
      </DataBoundary>
    </MainLayout>
  );
};
