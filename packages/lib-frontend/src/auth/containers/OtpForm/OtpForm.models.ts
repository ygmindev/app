import { type SignInFormModel } from '#lib-frontend/auth/containers/SignInForm/SignInForm.models';
import { type FormStepPropsModel } from '#lib-frontend/form/components/StepForm/StepForm.models';
import { type StylePropsModel } from '#lib-frontend/style/style.models';

export type OtpFormModel = {
  otp?: string;
};

export type OtpFormPropsModel = StylePropsModel & FormStepPropsModel<SignInFormModel>;
