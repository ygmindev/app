import { useRef } from 'react';

import { type PaymentMethodFormPropsModel } from '#lib-frontend/billing/containers/PaymentMethodForm/PaymentMethodForm.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import { type FormRefModel } from '#lib-frontend/data/data.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';

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
  // const { createToken } = usePaymentMethodResource();
  // TODO: fix
  const ref = useRef<FormRefModel<undefined>>(null);
  return (
    <FormContainer
      // fields={[
      //   {
      //     element: (
      //       <Wrapper width={theme.layout.width[THEME_SIZE.MEDIUM]}>
      //         <DataBoundary
      //           id={`${CREATE_TOKEN}${PAYMENT_METHOD}`}
      //           mutate={async () =>
      //             currentUser && createToken({ form: undefined, root: currentUser._id })
      //           }>
      //           {({ data }) => (
      //             <PaymentMethodField
      //               defaultValue={defaultValue}
      //               // elementState={elementState}
      //               // error={error}
      //               ref={ref}
      //               token={data?.result}
      //               // error={error}
      //               // isAutoFocus
      //             />
      //           )}
      //         </DataBoundary>
      //       </Wrapper>
      //     ),
      //     id: PAYMENT_METHOD,
      //   },
      // ]}
      onCancel={onCancel}
      onSubmit={async () => ref.current?.submit()}
      onSuccess={onSuccess}
      style={styles}
      submitLabel={defaultValue ? t('core:edit') : t('core:new')}
      testID={testID}
    />
  );
};
