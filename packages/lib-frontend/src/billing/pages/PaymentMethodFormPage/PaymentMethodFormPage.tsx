import { PAYMENT } from '@lib/frontend/billing/billing.constants';
import { PaymentMethodForm } from '@lib/frontend/billing/containers/PaymentMethodForm/PaymentMethodForm';
import type { PaymentMethodFormPagePropsModel } from '@lib/frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import type { PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import type { EntityResourcePartialModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { ACCOUNT } from '@lib/shared/user/user.constants';

export const PaymentMethodFormPage: SFCModel<PaymentMethodFormPagePropsModel> = ({
  testID,
  ...props
}) => {
  const currentUser = useCurrentUser();
  const { styles } = useStyles({ props });
  const { location, replace } = useRouter<EntityResourcePartialModel<PaymentMethodModel>>();

  const value = location.params;

  const _handleBack = async (): Promise<void> => replace({ pathname: `/${ACCOUNT}/${PAYMENT}` });

  return (
    <CenterLayout
      style={styles}
      testID={testID}>
      {currentUser && (
        <PaymentMethodForm
          onCancel={_handleBack}
          onSuccess={_handleBack}
        />
      )}
    </CenterLayout>
  );
};
