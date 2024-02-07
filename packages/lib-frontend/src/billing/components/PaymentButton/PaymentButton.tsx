import { BILLING } from '@lib/frontend/billing/billing.constants';
import { type PaymentButtonPropsModel } from '@lib/frontend/billing/components/PaymentButton/PaymentButton.models';
import { PaymentMethodInput } from '@lib/frontend/billing/components/PaymentMethodInput/PaymentMethodInput';
import { SavedPaymentMethodInput } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { useState } from 'react';

export const PaymentButton: LFCModel<PaymentButtonPropsModel> = ({ price, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const [tab, tabSet] = useState<string>('saved');

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

      {tab === 'saved' && <SavedPaymentMethodInput />}

      {tab === 'new' && <PaymentMethodInput />}

      <Button
        color={THEME_COLOR.SUCCESS}
        icon="lock">
        {t('billing:pay', { value: `${price.currency}${price.value}` })}
      </Button>
    </Wrapper>
  );
};
