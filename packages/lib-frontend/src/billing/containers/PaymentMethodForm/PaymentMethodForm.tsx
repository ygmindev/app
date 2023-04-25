import { PAYMENT_METHOD } from '@lib/frontend/billing/billing.constants';
import { PaymentMethodField } from '@lib/frontend/billing/components/PaymentMethodField/PaymentMethodField';
import type { PaymentMethodFormPropsModel } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm.models';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { useMutation } from '@lib/frontend/core/hooks/useMutation/useMutation';
import { FormContainer } from '@lib/frontend/form/containers/FormContainer/FormContainer';
import type { FormRefModel } from '@lib/frontend/form/form.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { CREATE_TOKEN } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { useRef } from 'react';

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

  const { data, isLoading, mutate } = useMutation({
    id: `${CREATE_TOKEN}${PAYMENT_METHOD}`,
    mutate: async () =>
      currentUser && createToken({ form: undefined, root: { _id: currentUser._id } }),
  });

  const ref = useRef<FormRefModel>(null);

  useAsync({ onMount: async () => mutate() });

  return isLoading ? (
    <Loading fontSize={THEME_SIZE_MORE.XLARGE} />
  ) : (
    <FormContainer
      onCancel={onCancel}
      onSubmit={async () => ref.current?.submit()}
      onSuccess={onSuccess}
      rows={[
        {
          fields: [
            {
              id: PAYMENT_METHOD,
              Component: ({ elementState, error }) => (
                <Wrapper width={theme.layout.width[THEME_SIZE.MEDIUM]}>
                  <PaymentMethodField
                    defaultValue={defaultValue}
                    elementState={elementState}
                    error={error}
                    ref={ref}
                    token={data?.result}
                    // error={error}
                    // isAutoFocus
                  />
                </Wrapper>
              ),
            },
          ],
          id: PAYMENT_METHOD,
        },
      ]}
      style={styles}
      submitLabel={defaultValue ? t('core:labels.edit') : t('core:labels.add')}
      testID={testID}
    />
  );
};
