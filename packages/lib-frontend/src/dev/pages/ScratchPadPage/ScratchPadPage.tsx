import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { SpecificationDetail } from '@lib/frontend/openapi/components/SpecificationDetail/SpecificationDetail';
import { SpecificationForm } from '@lib/frontend/openapi/components/SpecificationForm/SpecificationForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { deliverySpecification } from '@lib/shared/aroom/utils/deliverySpecification/deliverySpecification';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <Wrapper flex>
        <SpecificationForm specification={deliverySpecification} />
      </Wrapper>

      <Wrapper flex>
        <SpecificationDetail specification={deliverySpecification} />
      </Wrapper>
    </Wrapper>
  );
};
