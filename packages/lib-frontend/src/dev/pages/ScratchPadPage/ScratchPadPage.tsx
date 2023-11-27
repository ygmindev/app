import { useState } from 'react';

import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '#lib-frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [current, currentSet] = useState(0);

  return (
    <Wrapper
      {...wrapperProps}
      flex
      position="relative">
      <Slides
        current={current}
        slides={[
          { element: <WrapperFixture>1</WrapperFixture>, id: '1' },
          { element: <WrapperFixture>2</WrapperFixture>, id: '2' },
        ]}
      />

      <Button onPress={() => currentSet(current - 1)}>back</Button>

      <Button onPress={() => currentSet(current + 1)}>front</Button>
    </Wrapper>
  );
};
