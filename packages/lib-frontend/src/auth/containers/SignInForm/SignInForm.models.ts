import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import type { WithSubmitPropsModel } from '@lib/frontend/core/decorators/withSubmitProps/withSubmitProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface SignInFormModel extends UsernameFormModel, OtpFormModel {}

export interface SignInFormPropsModel
  extends WithSubmitPropsModel<SignInFormModel>,
    WithStyleParamsModel,
    WithTestIdModel {
  isActive?: boolean;
  isCheckIfNotExists?: boolean;
}
