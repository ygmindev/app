import { useState } from 'react';

import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import type { ActivatablePropsModel } from '#lib-frontend/core/components/Activatable/Activatable.models';
import { WrapperFixture } from '#lib-frontend/core/components/Wrapper/Wrapper.fixtures';
import type { LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ActivatablePropsModel> = {
  Component: Activatable,
  Renderer: ({ ...props }) => {
    const [isActive, isActiveSet] = useState<boolean>(false);
    return (
      <Activatable
        {...props}
        onActive={() => isActiveSet(true)}
        onInactive={() => isActiveSet(false)}>
        <WrapperFixture>{`isActive: ${isActive}`}</WrapperFixture>
      </Activatable>
    );
  },
  defaultProps: {},
  variants: [{ props: { isHoverable: false } }, { props: { isPressable: false } }],
};
