import { PAYMENT } from '#lib-frontend/billing/billing.constants';
import { PaymentMethodForm } from '#lib-frontend/billing/containers/PaymentMethodForm/PaymentMethodForm';
import {
  type PaymentMethodFormPageParamsModel,
  type PaymentMethodFormPagePropsModel,
} from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const PaymentMethodFormPage: SFCModel<PaymentMethodFormPagePropsModel> = ({
  testID,
  ...props
}) => {
  const currentUser = useCurrentUser();
  const { styles } = useStyles({ props });
  const { location, replace } = useRouter<PaymentMethodFormPageParamsModel>();

  const handleBack = async (): Promise<void> => replace({ pathname: `/${ACCOUNT}/${PAYMENT}` });

  return currentUser ? (
    <PaymentMethodForm
      defaultValue={location.params?.value}
      onCancel={() => void handleBack()}
      onSuccess={handleBack}
      style={styles}
      testID={testID}
    />
  ) : (
    <></>
  );
};
