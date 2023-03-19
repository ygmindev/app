import { PAYMENT_METHOD } from '@lib/frontend/billing/billing.constants';
import { PaymentMethod } from '@lib/frontend/billing/components/PaymentMethod/PaymentMethod';
import { usePaymentMethodResource } from '@lib/frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import type { PaymentPagePropsModel } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useQuery } from '@lib/frontend/core/hooks/useQuery/useQuery';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { FORM } from '@lib/frontend/form/form.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import range from 'lodash/range';

export const PaymentPage: SFCModel<PaymentPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const paymentMethods = useStore((state) => state.billing.paymentMethods);
  const actions = useActions();
  const currentUser = useCurrentUser();
  const { styles } = useStyles({ props });
  const { push } = useRouter();
  const { getMany } = usePaymentMethodResource({ root: { _id: currentUser?._id } });
  const { data, isLoading } = useQuery({
    id: 'paymentMethods',
    query: async () => {
      if (paymentMethods) {
        return paymentMethods;
      }
      const { result } = await getMany({ filter: {} });
      result && actions?.billing.paymentMethodsSet(result);
      return result;
    },
  });

  const _tPaymentMethod = t('billing:labels.paymentMethod');

  return (
    <MainLayout
      style={styles}
      testID={testID}>
      <Wrapper>
        {isLoading
          ? range(3).map((i) => (
              <PaymentMethod
                elementState={ELEMENT_STATE.LOADING}
                key={i}
              />
            ))
          : data?.map((value) => (
              <PaymentMethod
                key={value._id}
                value={value}
              />
            ))}
      </Wrapper>

      <Wrapper isRowAlign>
        <Button
          icon="add"
          onPress={() => push({ pathname: `/${FORM}/${PAYMENT_METHOD}` })}>
          {t('core:labels.add', { value: _tPaymentMethod })}
        </Button>
      </Wrapper>
    </MainLayout>
  );
};
