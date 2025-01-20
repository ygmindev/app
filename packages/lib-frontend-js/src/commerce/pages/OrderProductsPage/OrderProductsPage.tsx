import { PAYMENT } from '@lib/frontend/billing/billing.constants';
import { ORDER } from '@lib/frontend/commerce/commerce.constants';
import { ProductItemInput } from '@lib/frontend/commerce/containers/ProductItemInput/ProductItemInput';
import { type OrderProductsPagePropsModel } from '@lib/frontend/commerce/pages/OrderProductsPage/OrderProductsPage.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { FormContainer } from '@lib/frontend/data/components/FormContainer/FormContainer';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const OrderProductsPage: LFCModel<OrderProductsPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [items, itemsSet] = useStore('commerce.items');
  const { push } = useRouter();
  return (
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
  );
};
