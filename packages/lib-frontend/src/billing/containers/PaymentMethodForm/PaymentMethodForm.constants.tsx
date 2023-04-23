import { PaymentMethodField } from '@lib/frontend/billing/components/PaymentMethodField/PaymentMethodField';
import type { FormContainerRowModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const PAYMENT_METHOD_FORM_FIELDS: Array<FormContainerRowModel> = withId([
  {
    fields: [
      {
        Component: ({ elementState, error }) => (
          <PaymentMethodField
            elementState={elementState}
            error={error}
            // onChange={onChange}
            // value={value}
            // elementState={elementState}
            // error={error}
            // isAutoFocus
            // onChange={async (value: string): Promise<void> => {
            //   onChange && onChange(value);
            //   if (value.length === OTP_LENGTH) {
            //     await sleep();
            //     handleSubmit();
            //   }
            // }}
          />
        ),
        id: 'payment',
      },
    ],
  },
]);
