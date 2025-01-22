import { BILLING } from '@lib/frontend/billing/billing.constants';
import {
  type SavedPaymentMethodInputPropsModel,
  type SavedPaymentMethodInputRefModel,
} from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput.models';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const SavedPaymentMethodInput: RLFCModel<
  SavedPaymentMethodInputRefModel,
  SavedPaymentMethodInputPropsModel
> = forwardRef(({ defaultValue, onChange, value, ...props }, ref) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const currentUser = useCurrentUser();
  const { getMany } = usePaymentMethodResource({ root: currentUser?._id });
  const refF = useRef<SavedPaymentMethodInputRefModel>(null);

  useImperativeHandle(ref, () => ({
    getData: () => refF.current?.getData(),
    reset: refF.current?.reset,
  }));

  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const handleQuery = async (): Promise<
    OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>
  > => {
    const output = await getMany();
    if (!valueControlled) {
      const primary =
        output.result?.find((v) => v._id && v._id === currentUser?.paymentMethodPrimary) ??
        output.result?.[0];

      if (primary) {
        output.result = sort(output.result ?? [], [(v) => (v._id === primary._id ? 0 : 1)]);
        valueControlledSet(primary);
      }
    }
    return output;
  };

  return (
    <DataBoundary
      {...wrapperProps}
      fallbackData={{
        result: getEntityResourceFixture({
          count: 3,
          data: () => ({ title: 'test' }),
        }),
      }}
      id={PAYMENT_METHOD_RESOURCE_NAME}
      query={handleQuery}
      ref={refF}>
      {({ data }) => (
        <SelectInput
          isVertical
          onChange={(v) => {
            const option = data?.result?.find(({ _id }) => v === _id);
            option && valueControlledSet(option);
          }}
          options={
            data?.result?.map(({ _id, last4, name, type }) => ({
              id: _id ?? '',
              label: (
                <Title
                  flex
                  icon={
                    type === PAYMENT_METHOD_TYPE.BANK
                      ? 'bank'
                      : type === PAYMENT_METHOD_TYPE.CARD
                        ? 'card'
                        : undefined
                  }
                  key={_id}
                  title={t('billing:paymentMethodTitle', { last4, name })}
                />
              ),
            })) ?? []
          }
          value={valueControlled?._id}
        />
      )}
    </DataBoundary>
  );
});
