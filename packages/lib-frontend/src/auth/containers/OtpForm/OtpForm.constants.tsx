import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { FormContainerRowModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import type { FormValidatorsModel } from '@lib/frontend/form/form.models';
import { validateLength } from '@lib/frontend/form/utils/validateLength/validateLength';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const OTP_FORM_VALIDATORS: FormValidatorsModel<OtpFormModel> = {
  otp: validateLength(OTP_LENGTH),
};

export const OTP_FORM_FIELDS: Array<FormContainerRowModel> = withId([
  {
    fields: [
      {
        id: 'otp',
        render: ({ elementState, error, handleSubmit, onChange, value }) => (
          <OtpField
            elementState={elementState}
            error={error}
            isAutoFocus
            onChange={async (value: string): Promise<void> => {
              onChange && onChange(value);
              if (value.length === OTP_LENGTH) {
                await sleep();
                handleSubmit();
              }
            }}
            value={value}
          />
        ),
      },
    ],
  },
]);
