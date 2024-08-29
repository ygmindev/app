import { type ReactElement } from 'react';

import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { type DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';

export type DroppablePropsModel = {
  anchor(params: boolean): ReactElement;
} & Pick<ActivatablePropsModel, 'trigger'> &
  Omit<DropdownPropsModel, 'anchor' | 'onToggle'>;
