import { BILLING } from '@lib/frontend/billing/billing.constants';
import { type SavedPaymentMethodInputPropsModel } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput.models';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const SavedPaymentMethodInput: LFCModel<SavedPaymentMethodInputPropsModel> = ({
  defaultValue,
  onChange,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const currentUser = useCurrentUser();
  const { getMany } = usePaymentMethodResource();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  return (
    <DataBoundary
      {...wrapperProps}
      fallbackData={{
        result: getEntityResourceFixture({ count: 3, data: (i) => ({ _id: i, title: 'test' }) }),
      }}
      id={PAYMENT_METHOD_RESOURCE_NAME}
      params={{ root: currentUser?._id }}
      query={getMany}>
      {({ data }) => (
        <MenuInput
          label={t('billing:savedPaymentMethod_plural')}
          onChange={(v) => {
            const selectedValue = data?.result?.find(({ _id }) => _id === v);
            selectedValue && valueControlledSet(selectedValue);
          }}
          options={
            data?.result?.map(({ _id, last4, name, type }) => ({
              icon:
                type === PAYMENT_METHOD_TYPE.BANK
                  ? 'bank'
                  : type === PAYMENT_METHOD_TYPE.CARD
                    ? 'card'
                    : undefined,
              id: _id ?? '',
              label: t('billing:paymentMethodTitle', { last4, name }),
            })) ?? []
          }
          value={valueControlled?._id}
        />
      )}
    </DataBoundary>
  );
};
