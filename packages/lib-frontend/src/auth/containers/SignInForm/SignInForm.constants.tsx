import { OtpForm } from '#lib-frontend/auth/containers/OtpForm/OtpForm';
import {
  type SignInFormModel,
  type SignInFormPropsModel,
} from '#lib-frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '#lib-frontend/auth/containers/UsernameForm/UsernameForm';
import { type FormStepModel } from '#lib-frontend/form/components/StepForm/StepForm.models';

export const SIGN_IN_FORM_STEPS = ({
  method,
  mode,
}: SignInFormPropsModel): Array<FormStepModel<SignInFormModel>> => [
  {
    element: (
      <UsernameForm
        method={method}
        mode={mode}
      />
    ),
    id: 'username',
  },
  { element: <OtpForm />, id: 'otp' },
];
