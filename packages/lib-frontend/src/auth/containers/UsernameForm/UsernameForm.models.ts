import type { SignInFormModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import type { FormStepPropsModel } from '@lib/frontend/form/components/StepForm/StepForm.models';
import type { UsernameMethodModel } from '@lib/shared/auth/auth.models';
import type { OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';

export interface UsernameFormModel {
  method: UsernameMethodModel;
  username: string;
}

export interface UsernameFormPropsModel
  extends FormStepPropsModel<SignInFormModel, UsernameFormModel, OtpModel>,
    Partial<Pick<UsernameFormModel, 'method'>> {
  isCheckIfNotExists?: boolean;
}
