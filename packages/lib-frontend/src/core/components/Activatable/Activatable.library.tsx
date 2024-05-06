import { useState } from 'react';

import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ActivatablePropsModel> = {
  Component: Activatable,
  Renderer: ({ children, ...props }) => {
    const [isActive, isActiveSet] = useState<boolean>(false);
    return (
      <Activatable
        {...props}
        onActive={() => isActiveSet(true)}
        onInactive={() => isActiveSet(false)}>
        {children ?? <WrapperFixture>{`isActive: ${isActive}`}</WrapperFixture>}
      </Activatable>
    );
  },
  defaultProps: {},
  variants: [...Object.values(ACTIVATABLE_TRIGGER).map((value) => ({ props: { trigger: value } }))],
};
