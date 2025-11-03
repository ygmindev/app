import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';

export type SignInFormModel = Partial<OtpModel>;

export type OtpFormPropsModel = FormStepPropsModel<SignInFormModel, OtpFormModel>;

export type OtpFormModel = Pick<OtpModel, 'email' | 'phone' | 'callingCode'> & {
  isCheckExists?: boolean;
  otp?: string;
};
