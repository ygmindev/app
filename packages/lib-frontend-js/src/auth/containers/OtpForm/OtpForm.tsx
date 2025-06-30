import { OtpInput } from '@lib/frontend/auth/components/OtpInput/OtpInput';
import { OTP_FORM_VALIDATORS } from '@lib/frontend/auth/containers/OtpForm/OtpForm.constants';
import { type OtpFormPropsModel } from '@lib/frontend/auth/containers/OtpForm/OtpForm.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormContainerRefModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { type EntityResourceDataModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { useRef } from 'react';

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
  const ref = useRef<FormContainerRefModel<EntityResourceDataModel<OtpModel>>>(null);
  return (
    <FormContainer
      {...wrapperProps}
      fields={[{ element: <OtpInput onBack={onBack} />, id: 'otp' }]}
      flex
      isButton={false}
      isCenter
      onComplete={() => {
        onComplete && onComplete();
        ref.current?.reset();
      }}
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
