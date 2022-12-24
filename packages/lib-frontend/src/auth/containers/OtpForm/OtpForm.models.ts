import type { SignInFormModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import type { FormStepPropsModel } from '@lib/frontend/form/components/FormSteps/FormSteps.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';

export interface OtpFormModel {
  otp: string;
}

export interface OtpFormPropsModel extends WithStyleModel, FormStepPropsModel<SignInFormModel> {}
