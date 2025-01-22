import { BILLING } from '@lib/frontend/billing/billing.constants';
import { SavedPaymentMethodInput } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput';
import { type SavedPaymentMethodInputRefModel } from '@lib/frontend/billing/components/SavedPaymentMethodInput/SavedPaymentMethodInput.models';
import { NewPaymentMethodForm } from '@lib/frontend/billing/containers/NewPaymentMethodForm/NewPaymentMethodForm';
import {
  type PaymentMethodInputPropsModel,
  type PaymentMethodInputRefModel,
} from '@lib/frontend/billing/containers/PaymentMethodInput/PaymentMethodInput.models';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { forwardRef, useRef, useState } from 'react';

export const PaymentMethodInput: RLFCModel<
  PaymentMethodInputRefModel,
  PaymentMethodInputPropsModel
> = forwardRef(({ defaultValue, onChange, products, value, ...props }, ref) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const refF = useRef<SavedPaymentMethodInputRefModel>(null);

  const [paymentMethod, paymentMethodSet] = useState<PartialModel<PaymentMethodModel>>();
  const { valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const handleChange = (paymentMethod?: PartialModel<PaymentMethodModel>): void => {
    paymentMethodSet(paymentMethod);
    valueControlledSet(paymentMethod?.externalId);
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

        <ModalButton
          element={({ onClose }) => (
            <NewPaymentMethodForm
              onCancel={onClose}
              onSuccess={refF.current?.reset}
              // products={products}
            />
          )}
          icon="add"
          type={BUTTON_TYPE.TRANSPARENT}>
          {t('core:new', { value: t('billing:paymentMethod') })}
        </ModalButton>
      </Wrapper>

      <SavedPaymentMethodInput
        onChange={handleChange}
        ref={refF}
        value={paymentMethod}
      />
    </Wrapper>
  );
});
