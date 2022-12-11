import { _PaymentMethodForm } from '@lib/frontend/billing/containers/PaymentMethodForm/_PaymentMethodForm';
import type {
  PaymentMethodFormPropsModel,
  PaymentMethodFormRefModel,
} from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useRef } from 'react';

export const PaymentMethodForm: SFCModel<PaymentMethodFormPropsModel> = ({
  onCancel,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const ref = useRef<PaymentMethodFormRefModel>(null);
  return (
    <FormContainer onCancel={onCancel} onSubmit={async () => ref.current?.submit()} style={styles}>
      <_PaymentMethodForm forwardedRef={ref} />
    </FormContainer>
  );
};
