import { PAYMENT_METHOD } from '@lib/frontend/billing/billing.constants';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import type { PaymentPagePropsModel } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useQuery } from '@lib/frontend/core/hooks/useQuery/useQuery';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { FORM } from '@lib/frontend/form/form.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';

export const PaymentPage: SFCModel<PaymentPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const currentUser = useCurrentUser();
  const { styles } = useStyles({ props });
  const { push } = useRouter();
  const { getMany } = usePaymentMethodResource({ root: { _id: currentUser?._id } });
  const { data } = useQuery({
    id: 'paymentMethods',
    query: async () => getMany({ filter: {} }),
  });
  console.warn(data);

  return (
    <MainLayout
      style={styles}
      testID={testID}>
      <Wrapper isRowAlign>
        <Button
          icon="add"
          onPress={() => push({ pathname: `/${FORM}/${PAYMENT_METHOD}` })}>
          {t('core:labels.add', { value: t('billing:labels.paymentMethod') })}
        </Button>
      </Wrapper>
    </MainLayout>
  );
};
