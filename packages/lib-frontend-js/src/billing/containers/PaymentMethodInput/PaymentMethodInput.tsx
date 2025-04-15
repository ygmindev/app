import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { BILLING } from '@lib/frontend/billing/billing.constants';
import { NewPaymentMethodInput } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput';
import { type NewPaymentMethodInputRefModel } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
import {
  type PaymentMethodInputPropsModel,
  type PaymentMethodInputRefModel,
} from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';
import { useBankResource } from '@lib/frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib/frontend/billing/hooks/useCardResource/useCardResource';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { ItemList } from '@lib/frontend/core/components/ItemList/ItemList';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ModalFormButton } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { DataBoundary } from '@lib/frontend/data/components/DataBoundary/DataBoundary';
import { type DataBoundaryRefModel } from '@lib/frontend/data/components/DataBoundary/DataBoundary.models';
import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import {
  type PaymentMethodModel,
  type PaymentMethodTypeModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import { forwardRef, useRef } from 'react';

export const PaymentMethodInput: RLFCModel<
  PaymentMethodInputRefModel,
  PaymentMethodInputPropsModel
> = forwardRef(({ defaultValue, isEditable, onChange, value, ...props }, ref) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const currentUser = useCurrentUser();
  const { userUpdate } = useSignInResource();
  const { remove: bankRemove } = useBankResource({ root: currentUser?._id });
  const { remove: cardRemove } = useCardResource({ root: currentUser?._id });
  const { getMany } = usePaymentMethodResource({ root: currentUser?._id });
  const refF =
    useRef<
      DataBoundaryRefModel<
        ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>
      >
    >(null);

  const inputRef = useRef<NewPaymentMethodInputRefModel>(null);

  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const handleQuery = async (): Promise<
    ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, PaymentMethodModel, UserModel>
  > => {
    const output = await getMany();
    if (!valueControlled) {
      const primary =
        output.result?.find((v) => v._id && v._id === currentUser?.paymentMethodPrimary) ??
        output.result?.[0];
      if (primary) {
        output.result = sort(output.result ?? [], [(v) => (v._id === primary._id ? 0 : 1)]);
        valueControlledSet(primary.externalId);
      }
    }
    return output;
  };

  const getIcon = (type?: PaymentMethodTypeModel): WithIconPropsModel['icon'] => {
    switch (type) {
      case PAYMENT_METHOD_TYPE.BANK:
        return 'bank';
      case PAYMENT_METHOD_TYPE.CARD:
        return 'card';
      default:
        return 'dollar';
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
      s>
      <Wrapper
        isAlign
        isRow
        justify={FLEX_JUSTIFY.SPACE_BETWEEN}>
        <Text fontStyle={FONT_STYLE.HEADLINE}>{t('billing:paymentMethod')}</Text>

        <ModalFormButton
          fields={[
            {
              element: <NewPaymentMethodInput ref={ref} />,
              id: PAYMENT_METHOD_RESOURCE_NAME,
            },
          ]}
          icon="add"
          isFullHeight
          onComplete={() => {
            void refF.current?.reset?.();
          }}
          onSubmit={async () => (await inputRef.current?.submit()) || null}
          p
          successMessage={t('billing:paymentMethodSuccess')}
          type={BUTTON_TYPE.TRANSPARENT}>
          {t('core:new', { value: t('billing:paymentMethod') })}
        </ModalFormButton>
      </Wrapper>

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
        {({ data }) =>
          isEditable ? (
            <ItemList
              items={data?.result?.map(({ _id, last4, name, type }) => ({
                icon: getIcon(type),
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
                    <Chip>{t('billing:defaultPayment')}</Chip>
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
                      value: t('billing:paymentMethodTitle', {
                        last4: item.last4,
                        name: item.name,
                      }),
                    })}
                    icon="trash"
                    onPress={async () => {
                      switch (item.type) {
                        case PAYMENT_METHOD_TYPE.BANK:
                          await bankRemove({ filter: [{ field: '_id', value: item.id }] });
                        case PAYMENT_METHOD_TYPE.CARD:
                          await cardRemove({ filter: [{ field: '_id', value: item.id }] });
                      }
                      void refF.current?.reset?.();
                    }}
                    tooltip={t('core:remove')}
                    type={BUTTON_TYPE.INVISIBLE}
                  />
                </Wrapper>
              )}
            />
          ) : (
            <SelectInput
              isVertical
              onChange={(v) => valueControlledSet(v)}
              options={
                data?.result?.map(({ _id, externalId, last4, name, type }) => ({
                  id: externalId ?? _id ?? '',
                  label: (
                    <Title
                      flex
                      icon={getIcon(type)}
                      key={_id}
                      title={t('billing:paymentMethodTitle', { last4, name })}
                    />
                  ),
                })) ?? []
              }
              value={valueControlled}
            />
          )
        }
      </DataBoundary>
    </Wrapper>
  );
});
