import type { SignInFormModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import type { StepPropsModel } from '@lib/frontend/core/components/Steps/Steps.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';

export interface OtpFormModel {
  otp: string;
}

export interface OtpFormPropsModel extends WithStyleParamsModel, StepPropsModel<SignInFormModel> {}
