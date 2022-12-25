import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import { OTP_FORM_VALIDATORS } from '@lib/frontend/auth/containers/OtpForm/OtpForm.constants';
import type { OtpFormPropsModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { useForm } from '@lib/frontend/form/hooks/useForm/useForm';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';
import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';

export const OtpForm: SFCModel<OtpFormPropsModel> = (props) => {
  const { t } = useTranslation([AUTH]);
  const { error } = useNotification();

  const _handleError = (e: Error): void => {
    if ((e as HttpError).statusCode === HTTP_STATUS_CODE.FORBIDDEN) {
      error({
        icon: ICON.ban,
        message: t('auth:messages.invalidOtp'),
        title: t('auth:labels.invalidOtp'),
      });
    } else {
      throw e;
    }
  };

  return (
    <ErrorBoundary onError={_handleError}>
      <_OtpForm {...props} />
    </ErrorBoundary>
  );
};

export const _OtpForm: SFCModel<OtpFormPropsModel> = ({ data, onBack, onSuccess, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation([AUTH]);

  const { errors, handleChange, handleReset, handleSubmit, isLoading, values } = useForm({
    onSubmit: async ({ otp }) => {
      onSuccess && (await onSuccess({ otp }));
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
    <CenterLayout style={styles}>
      {data && data.username && (
        <Trans
          Components={[
            <Text
              color={THEME_COLOR.PRIMARY}
              isBold
            />,
          ]}
          i18nKey="messages.otpEnter"
          ns="auth"
          params={{ value: data.username }}
        />
      )}

      <OtpField
        error={errors.otp}
        isAutoFocus
        isDisabled={isLoading}
        onChange={_handleChange}
        value={values.otp}
      />

      <Wrapper isRowAlign>
        <Text>{t('auth:messages.otpDidntGet')}</Text>

        <Button
          icon={ICON.refresh}
          isDisabled={isLoading}
          onPress={onBack}>
          {t('core:labels.tryAgain')}
        </Button>
      </Wrapper>

      <Appear
        isLazy={false}
        isVisible={isLoading}>
        <Loading size={THEME_SIZE.LARGE} />
      </Appear>
    </CenterLayout>
  );
};
