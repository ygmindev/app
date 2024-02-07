import { PaymentButton } from '@lib/frontend/billing/components/PaymentButton/PaymentButton';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
// import { SpecificationDetail } from '@lib/frontend/openapi/components/SpecificationDetail/SpecificationDetail';
// import { SpecificationForm } from '@lib/frontend/openapi/containers/SpecificationForm/SpecificationForm';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <MainLayout
      {...wrapperProps}
      flex
      isFullHeight
      p>
      <PaymentButton
        price={{
          currency: '$',
          value: 123.12,
        }}
      />

      <Wrapper flex>
        {/* <SpecificationInputForm specification={deliverySpecification} /> */}
        {/* <SpecificationForm /> */}
      </Wrapper>

      {/* <Wrapper flex>
        <SpecificationDetail specification={deliverySpecification} />
      </Wrapper> */}
    </MainLayout>
  );
};
