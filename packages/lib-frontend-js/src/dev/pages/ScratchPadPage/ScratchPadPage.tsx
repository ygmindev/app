import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useState } from 'react';

export const ScratchPadPage: LFCModel<ScratchPadPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [isActive, isActiveSet] = useState<boolean>(false);

  return (
    <MainLayout
      {...wrapperProps}
      p>
      <>
        <Dropdown
          anchor={
            <TextInput
              onBlur={() => isActiveSet(false)}
              onFocus={() => isActiveSet(true)}
            />
          }
          isOpen={isActive}
          onToggle={(v) => isActiveSet(v || false)}>
          <Wrapper></Wrapper>
        </Dropdown>
      </>
    </MainLayout>
  );
};
