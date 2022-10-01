import { SignInForm } from '@lib/frontend/auth/containers/SignInForm/SignInForm';
import type { UsernameUpdatePropsModel } from '@lib/frontend/auth/containers/UsernameUpdate/UsernameUpdate.models';
import { useSignInResourceResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { SUCCESS_ALERT } from '@lib/frontend/notification/notification.constants';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const UsernameUpdate: SFCModel<UsernameUpdatePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { alertAdd } = useAlert();
  // const { up } = useRouter();
  const { usernameUpdate } = useSignInResourceResource();
  return (
    <Wrapper
      grow
      p
      style={styles}
      testID={testID}>
      <SignInForm
        isCheckIfNotExists
        onSubmit={async (form) => {
          await usernameUpdate({ form });
          // await up();
          return alertAdd({
            ...SUCCESS_ALERT,
            message: t('core:messages.updated', { value: t(form.username) }),
          });
        }}
      />
    </Wrapper>
  );
};
