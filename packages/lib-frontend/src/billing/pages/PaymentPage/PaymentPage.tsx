import range from 'lodash/range';

import { SkeletonGroup } from '#lib-frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { PAYMENT_METHOD } from '#lib-frontend/billing/billing.constants';
import { PaymentMethodItem } from '#lib-frontend/billing/components/PaymentMethodItem/PaymentMethodItem';
import { usePaymentMethodResource } from '#lib-frontend/billing/hooks/usePaymentMethodResource/usePaymentMethodResource';
import { type PaymentPagePropsModel } from '#lib-frontend/billing/pages/PaymentPage/PaymentPage.models';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { DataBoundary } from '#lib-frontend/data/components/DataBoundary/DataBoundary';
import { FORM } from '#lib-frontend/form/form.constants';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useCurrentUser } from '#lib-frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { sort } from '#lib-shared/core/utils/sort/sort';

export const PaymentPage: SFCModel<PaymentPagePropsModel> = ({ testID, ...props }) => {
  const { t } = useTranslation();
  const actions = useActions();
  const currentUser = useCurrentUser();
  const { styles } = useStyles({ props });
  const { push } = useRouter();
  const { getMany } = usePaymentMethodResource({ root: { _id: currentUser?._id } });

  const tPaymentMethod = t('billing:paymentMethod');
  const tPaymentMethodAdd = t('core:add', { value: tPaymentMethod });

  const query = async (): Promise<Array<PaymentMethodModel> | undefined> => {
    const { result } = await getMany({ filter: {} });
    const resultF =
      result &&
      sort({
        by: [(x) => currentUser?.paymentMethodPrimary !== x._id, ['created', false]],
        value: result,
      });
    resultF && actions?.billing.paymentMethodsSet(resultF);
    return resultF;
  };

  return (
    <MainLayout
      isHorizontalCenter
      style={styles}
      testID={testID}>
      <DataBoundary
        fallback={
          <SkeletonGroup>
            <LineGroup title={t('billing:paymentMethod_plural')}>
              {range(5).map((i) => (
                <PaymentMethodItem
                  elementState={ELEMENT_STATE.LOADING}
                  key={i}
                />
              ))}
            </LineGroup>
          </SkeletonGroup>
        }
        id="paymentMethods"
        query={query}>
        {({ data }) =>
          data && (
            <Wrapper s>
              {data.map((value) => (
                <PaymentMethodItem
                  key={value._id}
                  value={value}
                />
              ))}
            </Wrapper>
          )
        }
      </DataBoundary>

      <Button
        icon="add"
        onPress={() => push({ pathname: `/${FORM}/${PAYMENT_METHOD}` })}>
        {tPaymentMethodAdd}
      </Button>
    </MainLayout>
  );
};
