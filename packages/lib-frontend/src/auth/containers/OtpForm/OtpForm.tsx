import { OtpField } from '#lib-frontend/auth/components/OtpField/OtpField';
import {
  OTP_FORM_TEST_ID,
  OTP_FORM_VALIDATORS,
} from '#lib-frontend/auth/containers/OtpForm/OtpForm.constants';
import { type OtpFormPropsModel } from '#lib-frontend/auth/containers/OtpForm/OtpForm.models';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { Trans } from '#lib-frontend/locale/components/Trans/Trans';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';

export const OtpForm: LFCModel<OtpFormPropsModel> = ({
  data,
  onBack,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  return (
    <FormContainer
      {...wrapperProps}
      bottomElement={({ elementState }) => (
        <Wrapper
          isCenter
          isRowAlign>
          <Text>{t('auth:otpDidntGet')}</Text>

          <Button
            elementState={elementState}
            icon="refresh"
            onPress={onBack}>
            {t('core:tryAgain')}
          </Button>
        </Wrapper>
      )}
      errorContextGet={(e) =>
        (e as HttpError).statusCode === HTTP_STATUS_CODE.UNAUTHORIZED
          ? {
              icon: 'ban',
              message: ({ t }) => t('auth:wrongOtp'),
              title: ({ t }) => t('auth:wrongOtp'),
            }
          : undefined
      }
      fields={[{ element: <OtpField isAutoFocus />, id: 'otp' }]}
      flex
      isButton={false}
      isCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      testID={OTP_FORM_TEST_ID}
      topElement={() =>
        data?.email && (
          <Wrapper isCenter>
            <Trans
              components={[<Text isBold />]}
              i18nKey="otpEnter"
              ns="auth"
              params={{ value: data.email }}
            />
          </Wrapper>
        )
      }
      validators={OTP_FORM_VALIDATORS}
    />
  );
};
