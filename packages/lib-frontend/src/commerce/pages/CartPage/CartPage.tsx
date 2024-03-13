import { CheckoutButton } from '@lib/frontend/billing/components/CheckoutButton/CheckoutButton';
import { type CartPagePropsModel } from '@lib/frontend/commerce/pages/CartPage/CartPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const CartPage: LFCModel<CartPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [items] = useStore('commerce.items');
  return (
    <MainLayout {...wrapperProps}>
      <Text>CartPage</Text>

      <CheckoutButton items={items} />
    </MainLayout>
  );
};
