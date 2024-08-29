import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type OtpFormModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { type SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export type OtpFormPropsModel = FormStepPropsModel<SignInFormModel, OtpFormModel>;
