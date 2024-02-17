import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { validateNotEmpty } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useWebsocket } from '@lib/frontend/http/hooks/useWebsocket/useWebsocket';
import { SpecificationInputForm } from '@lib/frontend/openapi/components/SpecificationInputForm/SpecificationInputForm';
// import { SpecificationDetail } from '@lib/frontend/openapi/components/SpecificationDetail/SpecificationDetail';
// import { SpecificationForm } from '@lib/frontend/openapi/containers/SpecificationForm/SpecificationForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { deliverySpecification } from '@lib/shared/openapi/specifications/deliverySpecification/deliverySpecification';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { send } = useWebsocket();
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <Button onPress={() => send('test message')}>Send</Button>

      {/* <CheckoutButton
        price={{
          currency: 'usd',
          value: 123,
        }}
      /> */}

      <SpecificationInputForm
        flex
        specification={deliverySpecification}
        validators={{
          from: validateNotEmpty,
          to: validateNotEmpty,
        }}
      />
    </Wrapper>
  );
};
