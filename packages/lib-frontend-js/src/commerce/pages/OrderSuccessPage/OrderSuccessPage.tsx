import { type OrderSuccessPagePropsModel } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const OrderSuccessPage: LFCModel<OrderSuccessPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <Text>OrderSuccessPage</Text>
    </Wrapper>
  );
};
