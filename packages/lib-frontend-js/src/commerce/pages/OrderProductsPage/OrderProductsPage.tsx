import { BILLING, PAYMENT } from '@lib/frontend/billing/billing.constants';
import { ORDER, PRODUCTS } from '@lib/frontend/commerce/commerce.constants';
import { ProductItemInput } from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput';
import { type OrderProductsPagePropsModel } from '@lib/frontend/commerce/pages/OrderProductsPage/OrderProductsPage.models';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Tile } from '@lib/frontend/core/components/Tile/Tile';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { Trans } from '@lib/frontend/locale/components/Trans/Trans';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const OrderProductsPage: LFCModel<OrderProductsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([BILLING]);
  const [items, itemsSet] = useStore('commerce.items');
  const { push } = useRouter();
  return (items?.length ?? 0) > 0 ? (
    <FormContainer
      {...wrapperProps}
      fields={[
        {
          element: <ProductItemInput onChange={itemsSet} />,
          id: 'items',
        },
      ]}
      initialValues={{ items }}
      onSuccess={async () => push({ pathname: `${ORDER}/${PAYMENT}` })}
      p
    />
  ) : (
    <MainLayout
      {...wrapperProps}
      p>
      <Tile
        description={
          <Trans
            components={[<Link pathname={PRODUCTS} />]}
            i18nKey="billing:cardEmptyMessage"
            ns={BILLING}
          />
        }
        icon="empty"
        title={t('billing:cardEmpty')}
      />
    </MainLayout>
  );
};
