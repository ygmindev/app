import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface SignInFormModel extends UsernameFormModel, OtpFormModel {}

export interface SignInFormPropsModel extends WithStyleParamsModel, WithTestIdModel {
  isCheckIfNotExists?: boolean;
}
