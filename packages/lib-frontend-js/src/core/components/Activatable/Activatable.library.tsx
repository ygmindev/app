import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';
import { cloneElement, useState } from 'react';

export const props: LibraryPropsModel<ActivatablePropsModel> = {
  Component: Activatable,
  Renderer: ({ element }) => {
    const [isActive, isActiveSet] = useState<boolean>(false);
    return (
      <Activatable
        {...props}
        onActive={() => isActiveSet(true)}
        onInactive={() => isActiveSet(false)}>
        {cloneElement(element, { children: `isActive: ${isActive}` })}
      </Activatable>
    );
  },
  defaultProps: {},
  variants: cartesianObject({ trigger: Object.values(ACTIVATABLE_TRIGGER) }).map((props) => ({
    props,
  })),
};
