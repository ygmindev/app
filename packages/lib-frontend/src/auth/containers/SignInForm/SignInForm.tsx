import { OtpForm } from '@lib/frontend/auth/containers/OtpForm/OtpForm';
import type { OtpFormModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { SIGN_IN_FORM_MODE } from '@lib/frontend/auth/containers/SignInForm/SignInForm.constants';
import type { SignInFormPropsModel } from '@lib/frontend/auth/containers/SignInForm/SignInForm.models';
import { UsernameForm } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm';
import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { StepForm } from '@lib/frontend/form/components/StepForm/StepForm';
import { callingCode } from '@lib/frontend/locale/utils/callingCode/callingCode';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export const SignInForm: SFCModel<SignInFormPropsModel> = ({ method, mode, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { replace } = useRouter();
  const { signIn, usernameUpdate } = useSignInResource();

  const _handleSubmit = async (form: SignInFormModel): Promise<void> =>
    mode === SIGN_IN_FORM_MODE.CREATE ? signIn(form) : usernameUpdate(form);

  return (
    <StepForm<SignInFormModel, [UsernameFormModel, OtpFormModel]>
      beforeSubmit={async (data: SignInFormModel) => ({
        ...data,
        countryCode: data.countryCode ? callingCode(data.countryCode) : undefined,
      })}
      onSubmit={_handleSubmit}
      onSuccess={async () => replace({ pathname: '/' })}
      steps={[
        {
          element: (
            <UsernameForm
              isCheckIfNotExists={mode === SIGN_IN_FORM_MODE.UPDATE}
              method={method}
            />
          ),
          id: 'username',
        },
        {
          element: <OtpForm />,
          id: 'otp',
        },
      ]}
      style={styles}
      testID={testID}
    />
  );
};
