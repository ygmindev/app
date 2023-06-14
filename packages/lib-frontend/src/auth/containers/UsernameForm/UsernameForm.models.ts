import type { SignInFormModel } from '#lib-frontend/auth/containers/SignInForm/SignInForm.models';
import type { FormStepPropsModel } from '#lib-frontend/form/components/StepForm/StepForm.models';
import type { SignInMethodModel, SignInModeModel } from '#lib-shared/auth/auth.models';
import type { OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';
import type { UserModel } from '#lib-shared/user/resources/User/User.models';

export interface UsernameFormModel extends Pick<UserModel, 'callingCode' | 'phone' | 'email'> {}

export interface UsernameFormPropsModel
  extends FormStepPropsModel<SignInFormModel, UsernameFormModel, OtpModel> {
  method?: SignInMethodModel;
  mode: SignInModeModel;
  onMethodChange?(value: SignInMethodModel): void;
}
