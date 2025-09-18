import { OtpInput } from '@lib/frontend/auth/components/OtpInput/OtpInput';
import { OTP_FORM_VALIDATORS } from '@lib/frontend/auth/containers/OtpForm/OtpForm.constants';
import { type OtpFormPropsModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const OtpForm: LFCModel<OtpFormPropsModel> = ({
  data,
  onBack,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  ref,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: (
            <OtpInput
              isAutoFocus
              onBack={onBack}
            />
          ),
          id: 'otp',
        },
      ]}
      flex
      isButton={false}
      isCenter
      onComplete={onComplete}
      onError={onError}
      onSubmit={onSubmit}
      onSuccess={onSuccess}
      ref={ref}
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
