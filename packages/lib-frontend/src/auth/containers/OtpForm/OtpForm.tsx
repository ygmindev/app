import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import {
  OTP_ALERT,
  OTP_FORM_VALIDATORS,
} from '@lib/frontend/auth/containers/OtpForm/OtpForm.constants';
import type { OtpFormPropsModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { useSignInResourceResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { AsyncWrapper } from '@lib/frontend/core/components/AsyncWrapper/AsyncWrapper';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useForm } from '@lib/frontend/core/hooks/useForm/useForm';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';

export const OtpForm: SFCModel<OtpFormPropsModel> = ({ onBack, onSubmit, stepsData, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation([AUTH]);
  const { alertAdd } = useAlert();
  const { create } = useSignInResourceResource();

  const { errors, handleChange, handleReset, handleSubmit, isLoading, values } = useForm({
    onSubmit: async ({ otp }) => {
      try {
        const username = stepsData && stepsData.username;
        username && (await create({ form: { otp, username } }));
      } catch (e) {
        alertAdd(OTP_ALERT);
      }
      handleReset();
    },
    validators: OTP_FORM_VALIDATORS,
  });

  const _handleChange = (value: string): void => {
    handleChange('otp')(value);
    if (value.length === OTP_LENGTH) {
      setTimeout(handleSubmit);
    }
  };

  return (
    <AsyncWrapper
      grow
      isLoading={isLoading}
      style={styles}>
      <CenterLayout>
        {stepsData && stepsData.username && (
          <Trans
            Components={[<Text isBold />]}
            i18nKey="messages.verifyEnter"
            ns="auth"
            params={{ value: stepsData.username }}
          />
        )}
        <OtpField
          error={errors.otp}
          isAutoFocus
          isDisabled={isLoading}
          onChange={_handleChange}
          value={values.otp}
        />
        <Link onPress={onBack}>{t('auth:messages.verifyDidntGet')}</Link>
      </CenterLayout>
    </AsyncWrapper>
  );
};
