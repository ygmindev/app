import { BILLING } from '@lib/frontend/billing/billing.constants';
import { NewPaymentMethodInput } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput';
import { type NewPaymentMethodInputRefModel } from '@lib/frontend/billing/components/NewPaymentMethodInput/NewPaymentMethodInput.models';
import { SavedPaymentMethodInput } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput';
import {
  type PaymentMethodInputPropsModel,
  type PaymentMethodInputRefModel,
} from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';
import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { type PartialModel } from '@lib/shared/core/core.models';
import { forwardRef, useRef, useState } from 'react';

export const PaymentMethodInput: RLFCModel<
  PaymentMethodInputRefModel,
  PaymentMethodInputPropsModel
> = forwardRef(({ defaultValue, onChange, products, value, ...props }, _) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const [tab, tabSet] = useState<string>('saved');
  const [paymentMethod, paymentMethodSet] = useState<PartialModel<PaymentMethodModel>>();
  const ref = useRef<NewPaymentMethodInputRefModel>(null);
  const { valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const handleChange = (paymentMethod: PartialModel<PaymentMethodModel>): void => {
    paymentMethodSet(paymentMethod);
    valueControlledSet(paymentMethod.externalId);
  };
  const price = products && getPrice(products);
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
          onChange={handleChange}
          value={paymentMethod}
        />
      )}

      {tab === 'new' && (
        <NewPaymentMethodInput
          items={['test']}
          price={price}
          ref={ref}
        />
      )}
    </Wrapper>
  );
});
