import {
  type OtpFormModel,
  type SignInFormModel,
} from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type SIGN_IN_METHOD } from '@lib/shared/auth/auth.constants';
import { type FORM_MODE } from '@lib/shared/data/data.constants';

export type UsernameFormModel = Pick<SignInFormModel, 'callingCode' | 'phone' | 'email'>;

export type UsernameFormPropsModel = FormStepPropsModel<
  SignInFormModel,
  UsernameFormModel,
  OtpFormModel
> & {
  method?: SIGN_IN_METHOD;
  mode?: FORM_MODE;
  onMethodChange?(value: SIGN_IN_METHOD): void;
};
