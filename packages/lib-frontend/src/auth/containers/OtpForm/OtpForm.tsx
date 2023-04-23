import {
  OTP_FORM_FIELDS,
  OTP_FORM_VALIDATORS,
} from '@lib/frontend/auth/containers/OtpForm/OtpForm.constants';
import type {
  OtpFormModel,
  OtpFormPropsModel,
} from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import type { FormRefModel } from '@lib/frontend/form/form.models';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { useRef } from 'react';

export const OtpForm: SFCModel<OtpFormPropsModel> = ({
  data,
  onBack,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const ref = useRef<FormRefModel<OtpFormModel>>(null);

  return (
    <FormContainer
      bottomElement={({ elementState }) => (
        <Wrapper
          isCenter
          isRowAlign>
          <Text>{t('auth:messages.otpDidntGet')}</Text>

          <Button
            elementState={elementState}
            icon="refresh"
            onPress={onBack}>
            {t('core:labels.tryAgain')}
          </Button>
        </Wrapper>
      )}
      errorContextGet={(e) =>
        (e as HttpError).statusCode === HTTP_STATUS_CODE.UNAUTHORIZED
          ? {
              icon: 'ban',
              message: ({ t }) => t('auth:messages.wrongOtp'),
              title: ({ t }) => t('auth:labels.wrongOtp'),
            }
          : undefined
      }
      isButton={false}
      onComplete={() => {
        onComplete && onComplete();
        ref.current?.reset();
      }}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      ref={ref}
      rows={OTP_FORM_FIELDS}
      style={styles}
      testID={testID}
      topElement={() =>
        // TODO: handle phone
        data &&
        data.email && (
          <Wrapper isCenter>
            <Trans
              components={[<Text isBold />]}
              i18nKey="messages.otpEnter"
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
