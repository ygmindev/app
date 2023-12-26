import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type PaymentMethodFormPagePropsModel } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage.models';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const PaymentMethodFormPage: LFCModel<PaymentMethodFormPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Text>PaymentMethodFormPage</Text>
    </Wrapper>
  );
};
