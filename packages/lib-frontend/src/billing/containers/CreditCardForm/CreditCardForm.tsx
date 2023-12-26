import { type CreditCardFormPropsModel } from '#lib-frontend/billing/containers/CreditCardForm/CreditCardForm.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const CreditCardForm: LFCModel<CreditCardFormPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper {...wrapperProps}></Wrapper>
  );
};
