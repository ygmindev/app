import { useMemo } from 'react';

import {
  USERNAME_FORM_TEST_ID,
  USERNAME_FORM_VALIDATORS,
} from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.constants';
import {
  type UsernameFormModel,
  type UsernameFormPropsModel,
} from '#lib-frontend/auth/containers/UsernameForm/UsernameForm.models';
import { useOtpResource } from '#lib-frontend/auth/hooks/useOtpResource/useOtpResource';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/form/containers/FormContainer/FormContainer';
import { FORM_FIELD_TYPE } from '#lib-frontend/form/containers/FormContainer/FormContainer.constants';
import { type FormContainerRowModel } from '#lib-frontend/form/containers/FormContainer/FormContainer.models';
import { useValueControlled } from '#lib-frontend/form/hooks/useValueControlled/useValueControlled';
import { CountryField } from '#lib-frontend/locale/components/CountryField/CountryField';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { PhoneField } from '#lib-frontend/user/components/PhoneField/PhoneField';
import { SIGN_IN_METHOD } from '#lib-shared/auth/auth.constants';
import { type SignInMethodModel } from '#lib-shared/auth/auth.models';
import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';
import { pick } from '#lib-shared/core/utils/pick/pick';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { FORM_MODE } from '#lib-shared/form/form.constants';
import { type HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';

export const UsernameForm: SFCModel<UsernameFormPropsModel> = ({
  method,
  mode = FORM_MODE.NEW,
  onComplete,
  onMethodChange,
  onSubmit,
  onSuccess,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { create } = useOtpResource();
  const { valueControlled, valueControlledSet } = useValueControlled<SignInMethodModel>({
    defaultValue: SIGN_IN_METHOD.EMAIL,
    onChange: onMethodChange,
    value: method,
  });

  const checkExists = mode === FORM_MODE.UPDATE;

  const handleSubmit = async (data: UsernameFormModel): Promise<OtpModel | null> => {
    onSubmit && (await onSubmit(data));
    const form: OtpFormModel = pick(data, ['callingCode', 'phone', 'email']);
    if (checkExists) {
      form.checkExists = true;
    }
    const { result } = await create({ form });
    return result ?? null;
  };

  const rows: Array<FormContainerRowModel> = useMemo(() => {
    switch (valueControlled) {
      case SIGN_IN_METHOD.EMAIL:
        return withId([
          {
            fields: [
              {
                field: FORM_FIELD_TYPE.TEXT_FIELD,
                fieldProps: {
                  autoComplete: 'email',
                  icon: 'email',
                  label: ({ t }) => t('user:email'),
                },
                id: SIGN_IN_METHOD.EMAIL,
              },
            ],
          },
        ]) as Array<FormContainerRowModel>;
      case SIGN_IN_METHOD.PHONE:
        return withId([
          { fields: [{ element: <CountryField />, id: 'callingCode' }] },
          { fields: [{ element: <PhoneField />, id: SIGN_IN_METHOD.PHONE }] },
        ]);
      default:
        return [];
    }
  }, [valueControlled]);

  return (
    <FormContainer
      autoFocus={valueControlled}
      bottomElement={
        mode === FORM_MODE.UPDATE
          ? undefined
          : ({ elementState }) => (
              <Wrapper s>
                <Divider>{t('core:or')}</Divider>

                {valueControlled === SIGN_IN_METHOD.EMAIL && (
                  <Button
                    elementState={elementState}
                    icon="phone"
                    onPress={() => valueControlledSet(SIGN_IN_METHOD.PHONE)}
                    type={BUTTON_TYPE.TRANSPARENT}>
                    {t('core:continueWith', { value: t('user:phone') })}
                  </Button>
                )}

                {valueControlled === SIGN_IN_METHOD.PHONE && (
                  <Button
                    elementState={elementState}
                    icon="email"
                    onPress={() => valueControlledSet(SIGN_IN_METHOD.EMAIL)}
                    type={BUTTON_TYPE.TRANSPARENT}>
                    {t('core:continueWith', { value: t('user:email') })}
                  </Button>
                )}
              </Wrapper>
            )
      }
      errorContextGet={(e) =>
        checkExists && (e as HttpError).statusCode === HTTP_STATUS_CODE.CONFLICT
          ? { icon: 'people', message: t('auth:userExistsError') }
          : undefined
      }
      isGrouped
      isVerticalCenter
      onComplete={onComplete}
      onSubmit={handleSubmit}
      onSuccess={onSuccess}
      rows={rows}
      style={styles}
      testID={USERNAME_FORM_TEST_ID}
      validators={USERNAME_FORM_VALIDATORS}
    />
  );
};
