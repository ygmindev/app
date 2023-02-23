import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import { OTP_FORM_VALIDATORS } from '@lib/frontend/auth/containers/OtpForm/OtpForm.constants';
import type { OtpFormPropsModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ErrorContainer } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer';
import { ERROR_CONTAINER_MODE } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.constants';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { useForm } from '@lib/frontend/form/hooks/useForm/useForm';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { OTP_LENGTH } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';

export const OtpForm: SFCModel<OtpFormPropsModel> = ({ ...props }) => (
  <ErrorContainer
    getError={(e) =>
      (e as HttpError).statusCode === HTTP_STATUS_CODE.FORBIDDEN
        ? {
            icon: 'ban',
            message: ({ t }) => t('auth:messages.incorrectOtp'),
            title: ({ t }) => t('auth:labels.incorrectOtp'),
          }
        : undefined
    }
    mode={ERROR_CONTAINER_MODE.NOTIFICATION}>
    <_OtpForm {...props} />
  </ErrorContainer>
);

const _OtpForm: SFCModel<OtpFormPropsModel> = ({
  data,
  onBack,
  onComplete,
  onSuccess,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();

  const { errors, handleChange, handleReset, handleSubmit, isLoading, values } = useForm({
    onComplete: () => {
      onComplete && onComplete();
      handleReset();
    },
    onSuccess,
    validators: OTP_FORM_VALIDATORS,
  });

  const _handleChange = async (value: string): Promise<void> => {
    handleChange('otp')(value);
    if (value.length === OTP_LENGTH) {
      await sleep();
      handleSubmit && handleSubmit();
    }
  };

  return (
    <CenterLayout
      style={styles}
      testID={testID}>
      {data && data.username && (
        <Trans
          components={[<Text isBold />]}
          i18nKey="messages.otpEnter"
          ns="auth"
          params={{ value: data.username }}
        />
      )}

      <OtpField
        elementState={isLoading ? ELEMENT_STATE.DISABLED : undefined}
        error={errors.otp}
        isAutoFocus
        onChange={_handleChange}
        value={values.otp}
      />

      <Wrapper isRowAlign>
        <Text>{t('auth:messages.otpDidntGet')}</Text>

        <Button
          elementState={isLoading ? ELEMENT_STATE.LOADING : undefined}
          icon="refresh"
          onPress={onBack}>
          {t('core:labels.tryAgain')}
        </Button>
      </Wrapper>
    </CenterLayout>
  );
};
