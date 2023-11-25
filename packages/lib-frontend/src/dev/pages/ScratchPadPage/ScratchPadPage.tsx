import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '#lib-frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      position="relative">
      <WrapperFixture testID="YYY" />
    </Wrapper>
  );
};
