import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { BILLING } from '@lib/frontend/billing/billing.constants';
import { type SavedPaymentMethodInputPropsModel } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { type DataBoundaryRefModel } from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
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
import { useEffect, useRef } from 'react';

export const SavedPaymentMethodInput: LFCModel<SavedPaymentMethodInputPropsModel> = ({
  defaultValue,
  onChange,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const { userUpdate } = useSignInResource();
  const currentUser = useCurrentUser();
  const { getMany } = usePaymentMethodResource({ root: currentUser?._id });
  const { remove: bankRemove } = useBankResource({ root: currentUser?._id });
  const { remove: cardRemove } = useCardResource({ root: currentUser?._id });
  const ref =
    useRef<
      DataBoundaryRefModel<
        OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>
      >
    >(null);

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
      const primary = output.result?.find(
        (v) => v._id && v._id === currentUser?.paymentMethodPrimary,
      );
      primary && valueControlledSet(primary);
    }
    return output;
  };

  useEffect(() => {
    void ref.current?.reset?.();
  }, [ref.current]);

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
      ref={ref}>
      {({ data }) => (
        <Wrapper s>
          <SelectInput
            isVertical
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
              <Wrapper
                isAlign
                isRow>
                {currentUser?.paymentMethodPrimary === item.id ? (
                  <Button
                    elementState={ELEMENT_STATE.DISABLED}
                    type={BUTTON_TYPE.INVISIBLE}>
                    {t('billing:defaultPayment')}
                  </Button>
                ) : (
                  <Button
                    onPress={async () =>
                      userUpdate({
                        filter: [{ field: '_id', stringValue: currentUser?._id }],
                        update: { paymentMethodPrimary: item.id },
                      })
                    }
                    type={BUTTON_TYPE.INVISIBLE}>
                    {t('billing:setAsDefault')}
                  </Button>
                )}

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
                    await ref.current?.reset?.();
                  }}
                  tooltip={t('core:remove')}
                  type={BUTTON_TYPE.INVISIBLE}
                />
              </Wrapper>
            )}
            title={t('billing:paymentMethod_other')}
          />
        </Wrapper>
      )}
    </DataBoundary>
  );
};

// import { BILLING } from '@lib/frontend/billing/billing.constants';
// import { type SavedPaymentMethodInputPropsModel } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput.models';
// import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
// import { type LFCModel } from '@lib/frontend/core/core.models';
// import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
// import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
// import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
// import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
// import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
// import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
// import {
//   PAYMENT_METHOD_RESOURCE_NAME,
//   PAYMENT_METHOD_TYPE,
// } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
// import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

// export const SavedPaymentMethodInput: LFCModel<SavedPaymentMethodInputPropsModel> = ({
//   defaultValue,
//   onChange,
//   value,
//   ...props
// }) => {
//   const { wrapperProps } = useLayoutStyles({ props });
//   const { t } = useTranslation([BILLING]);
//   const currentUser = useCurrentUser();
//   const { getMany } = usePaymentMethodResource({ root: currentUser?._id });
//   const { valueControlled, valueControlledSet } = useValueControlled({
//     defaultValue,
//     onChange,
//     value,
//   });
//   return (
//     <DataBoundary
//       {...wrapperProps}
//       fallbackData={{
//         result: getEntityResourceFixture({
//           count: 3,
//           data: () => ({ title: 'test' }),
//         }),
//       }}
//       id={PAYMENT_METHOD_RESOURCE_NAME}
//       query={getMany}>
//       {({ data }) => (
//         <MenuInput
//           label={t('billing:savedPaymentMethod_other')}
//           onChange={(v) => {
//             const selectedValue = data?.result?.find(({ _id }) => _id === v);
//             selectedValue && valueControlledSet(selectedValue);
//           }}
//           options={
//             data?.result?.map(({ _id, last4, name, type }) => ({
//               icon:
//                 type === PAYMENT_METHOD_TYPE.BANK
//                   ? 'bank'
//                   : type === PAYMENT_METHOD_TYPE.CARD
//                     ? 'card'
//                     : undefined,
//               id: _id ?? '',
//               label: t('billing:paymentMethodTitle', { last4, name }),
//             })) ?? []
//           }
//           value={valueControlled?._id}
//         />
//       )}
//     </DataBoundary>
//   );
// };
