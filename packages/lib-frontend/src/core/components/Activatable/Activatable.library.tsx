import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import type { ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { useState } from 'react';

export const props: LibraryPropsModel<ActivatablePropsModel> = {
  Component: Activatable,
  Renderer: ({ ...props }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
      <Activatable
        {...props}
        onActive={() => setIsActive(true)}
        onInactive={() => setIsActive(false)}>
        <WrapperFixture>{`isActive: ${isActive}`}</WrapperFixture>
      </Activatable>
    );
  },
  defaultProps: {},
  variants: [{ props: { isHoverable: false } }, { props: { isPressable: false } }],
};
