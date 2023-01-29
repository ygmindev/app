import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { ReactNode } from 'react';

export interface DroppablePropsModel extends DroppableChildPropsModel {}

export interface DroppableChildPropsModel
  extends Pick<DropdownPropsModel, 'maxWidth'>,
    ChildrenPropsModel {
  anchor(isActive?: boolean): ReactNode;
}
