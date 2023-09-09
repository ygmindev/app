import { PaymentMethodField } from '#lib-frontend/billing/components/PaymentMethodField/PaymentMethodField';
import { type FormRowModel } from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { withId } from '#lib-shared/core/utils/withId/withId';

export const PAYMENT_METHOD_FORM_FIELDS: Array<FormRowModel> = withId([
  {
    fields: [
      {
        _id: 'payment',
        element: (
          <PaymentMethodField
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
      },
    ],
  },
]);
