import {
  type OtpFormModel,
  type SignInFormModel,
} from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type SignInMethodModel } from '@lib/shared/auth/auth.models';
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
