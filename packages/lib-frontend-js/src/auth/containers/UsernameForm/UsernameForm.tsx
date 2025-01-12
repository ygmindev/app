import { USERNAME_FORM_VALIDATORS } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.constants';
import {
  type UsernameFormModel,
  type UsernameFormPropsModel,
} from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useOtpResource } from '@lib/frontend/auth/hooks/useOtpResource/useOtpResource';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { type FormFieldModel } from '@lib/frontend/data/components/FormContainer/FormContainer.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { CountryInput } from '@lib/frontend/locale/components/CountryInput/CountryInput';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { PhoneInput } from '@lib/frontend/user/components/PhoneInput/PhoneInput';
import { AUTH, SIGN_IN_METHOD } from '@lib/shared/auth/auth.constants';
import { type SignInMethodModel } from '@lib/shared/auth/auth.models';
import { type OtpFormModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { FORM_MODE } from '@lib/shared/data/data.constants';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { useMemo } from 'react';

export const UsernameForm: LFCModel<UsernameFormPropsModel> = ({
  method,
  mode = FORM_MODE.NEW,
  onComplete,
  onMethodChange,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { t } = useTranslation([AUTH]);
  const { wrapperProps } = useLayoutStyles({ props });
  const { create } = useOtpResource();
  const { valueControlled, valueControlledSet } = useValueControlled<SignInMethodModel>({
    defaultValue: SIGN_IN_METHOD.EMAIL,
    onChange: onMethodChange,
    value: method,
  });
  const [currentUser] = useStore('user.currentUser');
  const isCheckExists = mode === FORM_MODE.UPDATE;

  const handleSubmit = async (data: UsernameFormModel): Promise<void> => {
    onSubmit && (await onSubmit(data));
    const form: OtpFormModel = pick(data, ['callingCode', 'phone', 'email']);
    if (isCheckExists) {
      form.isCheckExists = true;
    }
    const { result } = await create({ form });
    result && onSuccess && (await onSuccess());
  };

  const fields: Array<FormFieldModel<UsernameFormModel>> = useMemo(() => {
    switch (valueControlled) {
      case SIGN_IN_METHOD.EMAIL:
        return [
          {
            element: (
              <TextInput
                autoComplete="email"
                icon="email"
                label={t('user:email')}
              />
            ),
            icon: 'email',
            id: 'email',
          },
        ];
      case SIGN_IN_METHOD.PHONE:
        return [
          { element: <CountryInput />, id: 'callingCode' },
          { element: <PhoneInput />, id: 'phone' },
        ];
      default:
        return [];
    }
  }, [valueControlled]);

  return (
    <FormContainer
      {...wrapperProps}
      bottomElement={
        mode === FORM_MODE.UPDATE
          ? undefined
          : ({ elementState }) => {
              const elementStateF =
                elementState === ELEMENT_STATE.LOADING || elementState === ELEMENT_STATE.DISABLED
                  ? ELEMENT_STATE.DISABLED
                  : elementState;
              return (
                <Wrapper s>
                  <Divider>{t('core:or')}</Divider>

                  {valueControlled === SIGN_IN_METHOD.EMAIL && (
                    <Button
                      elementState={elementStateF}
                      icon="phone"
                      isFullWidth
                      onPress={() => valueControlledSet(SIGN_IN_METHOD.PHONE)}
                      type={BUTTON_TYPE.TRANSPARENT}>
                      {t('core:continueWith', { value: t('user:phone') })}
                    </Button>
                  )}

                  {valueControlled === SIGN_IN_METHOD.PHONE && (
                    <Button
                      elementState={elementStateF}
                      icon="email"
                      isFullWidth
                      onPress={() => valueControlledSet(SIGN_IN_METHOD.EMAIL)}
                      type={BUTTON_TYPE.TRANSPARENT}>
                      {t('core:continueWith', { value: t('user:email') })}
                    </Button>
                  )}
                </Wrapper>
              );
            }
      }
      errorContextGet={(e) =>
        isCheckExists && (e as HttpError).statusCode === HTTP_STATUS_CODE.CONFLICT
          ? { icon: 'people', message: t('auth:userExistsError') }
          : undefined
      }
      fields={fields}
      initialValues={
        currentUser
          ? {
              callingCode: currentUser.callingCode,
              email: currentUser.email,
              phone: currentUser.phone,
            }
          : undefined
      }
      isCenter
      isVerticalCenter
      onComplete={onComplete}
      onSubmit={handleSubmit}
      validators={USERNAME_FORM_VALIDATORS}
    />
  );
};
