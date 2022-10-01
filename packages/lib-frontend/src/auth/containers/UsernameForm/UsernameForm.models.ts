import type { SignInFormModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import type { StepPropsModel } from '@lib/frontend/core/components/Steps/Steps.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import type { PartialModel } from '@lib/shared/core/core.models';

export interface UsernameFormModel {
  username: string;
}

export interface UsernameFormPropsModel
  extends StepPropsModel<SignInFormModel, PartialModel<SignInFormModel>, OtpModel>,
    WithTestIdModel {
  isCheckIfNotExists?: boolean;
}
