import { OtpInput } from '@lib/frontend/auth/components/OtpInput/OtpInput';
import {
  OTP_FORM_TEST_ID,
  OTP_FORM_VALIDATORS,
} from '@lib/frontend/auth/containers/OtpForm/OtpForm.constants';
import { type OtpFormPropsModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

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
  const { t } = useTranslation([AUTH]);
  return (
    <FormContainer
      {...wrapperProps}
      bottomElement={() => (
        <Link
          align={FONT_ALIGN.CENTER}
          onPress={onBack}>
          {t('auth:otpDidntGet')}
        </Link>
      )}
      errorContextGet={(e) =>
        (e as HttpError).statusCode === HTTP_STATUS_CODE.UNAUTHORIZED
          ? {
              description: ({ t }) => t('auth:wrongOtp'),
              icon: 'ban',
              title: ({ t }) => t('auth:wrongOtp'),
            }
          : undefined
      }
      fields={[{ element: <OtpInput isAutoFocus />, id: 'otp' }]}
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
