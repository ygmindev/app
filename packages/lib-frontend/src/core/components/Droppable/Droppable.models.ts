import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { ReactNode } from 'react';

export interface DroppablePropsModel
  extends Pick<DropdownPropsModel, 'maxWidth'>,
    ChildrenPropsModel {
  anchor(isActive?: boolean): ReactNode;
}
