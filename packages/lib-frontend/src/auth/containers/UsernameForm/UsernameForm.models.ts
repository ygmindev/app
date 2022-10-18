import type { SignInFormModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import type { FormStepPropsModel } from '@lib/frontend/form/components/FormSteps/FormSteps.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import type { PartialModel } from '@lib/shared/core/core.models';

export interface UsernameFormModel {
  username: string;
}

export interface UsernameFormPropsModel
  extends FormStepPropsModel<SignInFormModel, PartialModel<SignInFormModel>, OtpModel>,
    WithTestIdModel {
  isCheckIfNotExists?: boolean;
}
