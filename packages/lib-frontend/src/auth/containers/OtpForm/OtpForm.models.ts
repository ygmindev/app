import type { SignInFormModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import type { StylePropsModel } from '@lib/frontend/core/core.models';
import type { FormStepPropsModel } from '@lib/frontend/form/components/FormSteps/FormSteps.models';

export interface OtpFormModel {
  otp: string;
}

export interface OtpFormPropsModel extends StylePropsModel, FormStepPropsModel<SignInFormModel> {}
