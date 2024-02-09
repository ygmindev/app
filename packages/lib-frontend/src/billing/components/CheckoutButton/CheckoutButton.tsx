import { BILLING } from '@lib/frontend/billing/billing.constants';
import { type CheckoutButtonPropsModel } from '@lib/frontend/billing/components/CheckoutButton/CheckoutButton.models';
import { PaymentMethodInput } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput';
import { type PaymentMethodInputRefModel } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput.models';
import { SavedPaymentMethodInput } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { PAYMENT_METHOD_MODE } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { useRef, useState } from 'react';

export const CheckoutButton: LFCModel<CheckoutButtonPropsModel> = ({ price, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const [tab, tabSet] = useState<string>('saved');
  const [paymentMethod, paymentMethodSet] = useState<PartialModel<PaymentMethodModel>>();
  const ref = useRef<PaymentMethodInputRefModel>(null);

  const handleSubmit = async () => {
    void ref.current?.submit();
  };

  return (
    <Wrapper
      {...wrapperProps}
      s>
      <Tabs
        onChange={tabSet}
        tabs={[
          {
            icon: 'bookmark',
            id: 'saved',
            label: t('billing:savedPaymentMethod_plural'),
          },
          { icon: 'add', id: 'new', label: t('billing:newPaymentMethod') },
        ]}
        value={tab}
      />

      {tab === 'saved' && (
        <SavedPaymentMethodInput
          onChange={paymentMethodSet}
          value={paymentMethod}
        />
      )}

      {tab === 'new' && (
        <PaymentMethodInput
          mode={PAYMENT_METHOD_MODE.CHECKOUT}
          ref={ref}
        />
      )}

      <Button
        color={THEME_COLOR.SUCCESS}
        icon="lock"
        onPress={handleSubmit}>
        {/* TODO: price formatter */}
        {t('billing:pay', { value: `${price.currency}${price.value}` })}
      </Button>
    </Wrapper>
  );
};
