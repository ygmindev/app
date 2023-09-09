import { useRef } from 'react';

import { PAYMENT_METHOD } from '#lib-frontend/billing/billing.constants';
import { PaymentMethodField } from '#lib-frontend/billing/components/PaymentMethodField/PaymentMethodField';
import { type PaymentMethodFormPropsModel } from '#lib-frontend/billing/containers/PaymentMethodForm/PaymentMethodForm.models';
import { usePaymentMethodResource } from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { type FormRefModel } from '#lib-frontend/data/data.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { CREATE_TOKEN } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';

export const PaymentMethodForm: SFCModel<PaymentMethodFormPropsModel> = ({
  defaultValue,
  onCancel,
  onSuccess,
  testID,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const currentUser = useCurrentUser();
  const { createToken } = usePaymentMethodResource();
  // TODO: fix
  const ref = useRef<FormRefModel<undefined>>(null);
  return (
    <FormContainer
      fields={[
        {
          _id: PAYMENT_METHOD,
          element: (
            <Wrapper width={theme.layout.width[THEME_SIZE.MEDIUM]}>
              <DataBoundary
                _id={`${CREATE_TOKEN}${PAYMENT_METHOD}`}
                mutate={async () =>
                  currentUser && createToken({ form: undefined, root: { _id: currentUser._id } })
                }>
                {({ data }) => (
                  <PaymentMethodField
                    defaultValue={defaultValue}
                    // elementState={elementState}
                    // error={error}
                    ref={ref}
                    token={data?.result}
                    // error={error}
                    // isAutoFocus
                  />
                )}
              </DataBoundary>
            </Wrapper>
          ),
        },
      ]}
      onCancel={onCancel}
      onSubmit={async () => ref.current?.submit()}
      onSuccess={onSuccess}
      style={styles}
      submitLabel={defaultValue ? t('core:edit') : t('core:add')}
      testID={testID}
    />
  );
};
