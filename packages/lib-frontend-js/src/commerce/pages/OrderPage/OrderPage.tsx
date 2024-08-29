import { OrderForm } from '@lib/frontend/commerce/containers/OrderForm/OrderForm';
import { type OrderPagePropsModel } from '@lib/frontend/commerce/pages/OrderPage/OrderPage.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const OrderPage: LFCModel<OrderPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return <OrderForm {...wrapperProps} />;
};
