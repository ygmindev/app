import { PaymentMethodField } from '@lib-frontend/billing/components/PaymentMethodField/PaymentMethodField';
import { useBankResource } from '@lib-frontend/billing/hooks/useBankResource/useBankResource';
import { useCardResource } from '@lib-frontend/billing/hooks/useCardResource/useCardResource';
import { type PaymentMethodFormPagePropsModel } from '@lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import { type LFCModel } from '@lib-frontend/core/core.models';
import { FormContainer } from '@lib-frontend/data/components/FormContainer/FormContainer';
import { useLayoutStyles } from '@lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useCurrentUser } from '@lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import {
  PAYMENT_METHOD_RESOURCE_NAME,
  PAYMENT_METHOD_TYPE,
} from '@lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type PaymentMethodFormModel } from '@lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';

export const PaymentMethodFormPage: LFCModel<PaymentMethodFormPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const { create: bankCreate, update: bankUpdate } = useBankResource({
    root: currentUser?._id,
  });
  const { create: cardCreate, update: cardUpdate } = useCardResource({
    root: currentUser?._id,
  });

  return (
    <FormContainer
      {...wrapperProps}
      fields={[{ element: <PaymentMethodField />, id: PAYMENT_METHOD_RESOURCE_NAME }]}
      isFullHeight
      onSubmit={async (data: { [PAYMENT_METHOD_RESOURCE_NAME]?: PaymentMethodFormModel }) => {
        const form = data[PAYMENT_METHOD_RESOURCE_NAME];
        if (form) {
          switch (form.type) {
            case PAYMENT_METHOD_TYPE.BANK:
              return bankCreate({ form });
            case PAYMENT_METHOD_TYPE.CARD:
              return cardCreate({ form });
          }
        }
      }}
      p
    />
  );
};
