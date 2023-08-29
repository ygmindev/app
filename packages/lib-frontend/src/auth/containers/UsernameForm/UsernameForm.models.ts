import { type SignInFormModel } from '#lib-frontend/auth/containers/SignInForm/SignInForm.models';
import { type FormStepPropsModel } from '#lib-frontend/data/components/StepForm/StepForm.models';
import { type SignInMethodModel } from '#lib-shared/auth/auth.models';
import { type FormModeModel } from '#lib-shared/data/data.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type UsernameFormModel = Pick<UserModel, 'callingCode' | 'phone' | 'email'>;

export type UsernameFormPropsModel = FormStepPropsModel<SignInFormModel> & {
  method?: SignInMethodModel;
  mode?: FormModeModel;
  onMethodChange?(value: SignInMethodModel): void;
};
