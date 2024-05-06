import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type SignInMethodModel } from '@lib/shared/auth/auth.models';
import { type OtpFormModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { type SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type FormModeModel } from '@lib/shared/data/data.models';

export type UsernameFormModel = Pick<SignInFormModel, 'callingCode' | 'phone' | 'email'>;

export type UsernameFormPropsModel = FormStepPropsModel<
  SignInFormModel,
  UsernameFormModel,
  OtpFormModel
> & {
  method?: SignInMethodModel;
  mode?: FormModeModel;
  onMethodChange?(value: SignInMethodModel): void;
};
